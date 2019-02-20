import requests
import os
import json


class IAM:

  url = "https://in.secure.hyperverge.co/iam/v1/";

  def __init__(self, tenantId, tenantKey):
    self.tenantId = tenantId
    self.tenantKey = tenantKey

  def setToken(self, token):
      self.token = token

  def userGetOTP(self, userId):
      payload = {"userId" : userId}
      headers = {
              "tenantid" : self.tenantId,
              "tenantkey" : self.tenantKey
              }
      try:
        response = requests.post(self.url+"user/getOTP", json=payload, headers=headers)
      except requests.exceptions.RequestException as e:
              print e
      return json.loads(response.text)

  def userAuth(self, userId, otp):
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    if(type(otp) is not str): return {"error" : "invalid_input", "message" : "otp must be a string"}

    headers = {
              "tenantid" : self.tenantId,
              "tenantkey" : self.tenantKey
              }
    payload = {"userId" : userId, "otp" : otp}
    try:
      response = requests.post(self.url+"user/auth", json=payload, headers=headers)
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text);

  def userFaceAuth(self, userId, faceFilePath):
    if((not os.path.exists(faceFilePath))): return {"error":"invalid_input", "message" : faceFilePath+" does not exist"}
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey
    }
    try:
      response = requests.post(self.url+"user/faceauth", files=dict(image=open(faceFilePath)), data=dict(userId=userId), headers=headers);
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text)

  def groupCreate(self, groupName):
    if(type(groupName) is not str): return {"error" : "invalid_input", "message" : "groupName must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
      }
    payload = {"groupName" : groupName, "sizeLimit" : 500}
    try:
      response = requests.post(self.url+"group/create", json=payload, headers=headers)
    except requests.exceptions.RequestException as e:
      print e
    return json.loads(response.text);


  def userCreate(self, userId, details):
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    if(type(details) is not str): return {"error" : "invalid_input", "message" : "details must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
    }
    payload = {"userId" : userId, "details" : details}
    try:
      response = requests.post(self.url+"user/create", json=payload, headers=headers)
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text);


  def userAddFace(self, userId, faceFilePath):
    if((not os.path.exists(faceFilePath))): return {"error":"invalid_input", "message" : faceFilePath+" does not exist"}
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
    }
    try:
      response = requests.post(self.url+"user/addFace", files=dict(image=open(faceFilePath)), data=dict(userId=userId), headers=headers);
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text)


  def groupAddUser(self, groupId, userId):
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    if(type(groupId) is not str): return {"error" : "invalid_input", "message" : "groupId must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
    }
    payload = {"userId" : userId, "groupId" : groupId}
    try:
      response = requests.post(self.url+"group/addUser", json=payload, headers=headers)
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text);



  def recognize(self, faceFilePath, groupId):
    if((not os.path.exists(faceFilePath))): return {"error":"invalid_input", "message" : faceFilePath+" does not exist"}
    if(type(groupId) is not str): return {"error" : "invalid_input", "message" : "groupId must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
    }
    try:
      response = requests.post(self.url+"image/recognize", files=dict(image=open(faceFilePath)), data=dict(groupId=groupId), headers=headers);
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text)


  def verify(self, faceFilePath, userId):
    if((not os.path.exists(faceFilePath))): return {"error":"invalid_input", "message" : faceFilePath+" does not exist"}
    if(type(userId) is not str): return {"error" : "invalid_input", "message" : "userId must be a string"}
    headers = {
      "tenantid" : self.tenantId,
      "tenantkey" : self.tenantKey,
      "token" : self.token
    }
    try:
      response = requests.post(self.url+"image/verify", files=dict(image=open(faceFilePath)), data=dict(userId=userId), headers=headers);
    except requests.exceptions.RequestException as e:
      print e

    return json.loads(response.text)



