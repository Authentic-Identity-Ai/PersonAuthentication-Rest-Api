var request = require("request");
var fs = require("fs");


function iam(tenantId, tenantKey, baseUrl){

    this.token;
    var self = this;
    if(baseUrl == null) baseUrl = "https://in.secure.hyperverge.co/iam/v1/";
   
    this.setToken = function(token){
       self.token = token; 
    }


    //cb - callback returns err. cb(err);
    this.userGetOTP = function(userId, cb){
        if(!typeof(userId)=="string" || !typeof(cb)=="function") 
            return cb({error: "invalid_input", message : "userId(string) and callback(function) are required"});

        request({
            url: baseUrl+"user/getOTP",
            method : "POST",
            headers : {
                'Accept' : "application/json",
                "Content-Type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey
            },
            body : {
                userId : userId   
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error", message : JSON.stringify(err)});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});

            cb(null)
        });
    };
    
    //cb - callback returns err or token. cb(err, token)
    this.userAuth = function(userId, otp, cb){
        if(typeof(otp) != "string") return cb({error : "invalid_input", message : "otp must be a string"});
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});

        request({
            url: baseUrl+"user/auth",
            method : "POST",
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey
            },
            body : {
                userId : userId,
                otp : otp
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body.result.token);
        });
    }

    //cb - callback returns err or token. cb(err, token)
    this.userFaceauth = function(userId, faceFilePath, cb){
        if(typeof(faceFilePath) != "string") return cb({error : "invalid_input", message : "faceFilePath must be a string"});
        try{
            fs.statSync(faceFilePath);
        }catch(e){
            return cb({error : "invalid_input", message : "faceFilePath does not exist"});
        }
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});

        var formData = {}
        formData["image"] = fs.createReadStream(faceFilePath);
        formData["userId"] = userId;
        //formData["permanent"] = "false";

        request({
            url: baseUrl+"user/faceauth",
            method : "POST",
            formData : formData,
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body.result.token);
        });
    }

    //cb - callback return err or groupId. cb(err, groupId)
    this.groupCreate = function(groupName, cb){
        if(typeof(groupName) != "string") return cb({error : "invalid_input", message : "groupName must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});
        if(!self.token) return cb(nullTokenError);
        request({
            url: baseUrl+"group/create",
            method : "POST",
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            body : {
                groupName : groupName,
                sizeLimit : 500
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body);
        });
    }

    //cb - callback return err. cb(err)
    this.userCreate = function(userId, details, cb){
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});        
        if(!self.token) return cb(nullTokenError);
        request({
            url: baseUrl+"user/create",
            method : "POST",
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            body : {
                userId : userId,
                details : details
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null);
        });
    }

    //cb - callback returns err or faceId. cb(err, faceIds)
    this.userAddFace = function(userId, faceFilePath, cb){
        if(!self.token) return cb(nullTokenError);
        if(typeof(faceFilePath) != "string") return cb({error : "invalid_input", message : "faceFilePath must be a string"});
        try{
            fs.statSync(faceFilePath);
        }catch(e){
            return cb({error : "invalid_input", message : "faceFilePath does not exist"});
        }
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});

        var formData = {}
        formData["image"] = fs.createReadStream(faceFilePath);
        formData["userId"] = userId;

        request({
            url: baseUrl+"user/addFace",
            method : "POST",
            formData : formData,
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            json: true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body);
        });
    }

    //cb - callback return err. cb(err)
    this.groupAddUser = function(groupId, userId, cb){
        if(!self.token) return cb(nullTokenError);
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});
        if(typeof(groupId) != "string") return cb({error : "invalid_input", message : "groupId must be a string"});
        request({
            url: baseUrl+"group/addUser",
            method : "POST",
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            body : {
                userId : userId,
                groupId : groupId
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null);
        });
    }

    //cb - callback returns err or token. cb(err)
    this.recognize = function(faceFilePath, groupId, cb){
        if(typeof(faceFilePath) != "string") return cb({error : "invalid_input", message : "faceFilePath must be a string"});
        try{
            fs.statSync(faceFilePath);
        }catch(e){
            return cb({error : "invalid_input", message : "faceFilePath does not exist"});
        }
        if(typeof(groupId) != "string") return cb({error : "invalid_input", message : "groupId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});

        var formData = {}
        formData["image"] = fs.createReadStream(faceFilePath);
        formData["groupId"] = groupId;
        
        request({
            url: baseUrl+"image/recognize",
            method : "POST",
            formData : formData,
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body.result);
        });
    }

    //cb - callback returns err or token. cb(err)
    this.verify = function(faceFilePath, userId, cb){
        if(typeof(faceFilePath) != "string") return cb({error : "invalid_input", message : "faceFilePath must be a string"});
        try{
            fs.statSync(faceFilePath);
        }catch(e){
            return cb({error : "invalid_input", message : "faceFilePath does not exist"});
        }
        if(typeof(userId) != "string") return cb({error : "invalid_input", message : "userId must be a string"});
        if(typeof(cb) != "function") return cb({error : "invalid_input", message : "cb must be a function"});

        var formData = {}
        formData["image"] = fs.createReadStream(faceFilePath);
        formData["userId"] = userId;
        
        request({
            url: baseUrl+"image/verify",
            method : "POST",
            formData : formData,
            headers : {
                'Accept' : "application/json",
                "content-type" : "application/json",
                "tenantid" : tenantId,
                "tenantkey" : tenantKey,
                "token" : self.token
            },
            json:true
        }, function(err, response, body){
            if(err) return cb({error : "request_error"});
            if(body.statusCode == "401") return cb(unAuthError);
            if(body.statusCode == "400") return cb({type : "invalid_request", message : body.error});
            cb(null, body.result);
        });
    }




}

module.exports = iam
