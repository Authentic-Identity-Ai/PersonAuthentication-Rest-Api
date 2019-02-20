import utils
import json

iam = utils.IAM("tenantId","tenantKey"); #replace tenantId and tenantKey

print iam.userGetOTP("+911234567890") #replace with valid phone number
#print iam.userAuth("+9112345890", "5600")
#print iam.userFaceAuth("+9112345890", "full-path-to-image");
#iam.setToken("token-received-from-userAuth-or-userFaceaut")

#groupId = iam.groupCreate("groupName-of-developers-choice")[u'result'][u'groupId']
#print groupId

#print iam.userCreate("+910000000002", json.dumps({"userName" : "userName-of-developer-choice"})) #replace the user's phone number

#response = iam.userAddFace("+910000000002", "full-path-to-image") #replace the user's phone number
#if(response[u'statusCode'] != "200"):
#  print response
#else:
#  faceIds = response[u'result'][u'faceIds']
#  print faceIds

#print iam.groupAddUser("groupId", "userId") #replace groupId from the output of groupCreate and userId

#print iam.recognize("full-path-to-image", "groupId") 

#print iam.verify("full-path-to-image", "userId") # replace userId with the user whose face is being verified
