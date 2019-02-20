var IAM = require("./utils.js");

var iam = new IAM("tenantId", "tenantKey");//replace tenantId and tenantKey

/*iam.userGetOTP("+9112345890", function(err){
    console.log(arguments)
});*/

/*iam.userAuth("+9112345890", "8628", function(err, token){ //replace otp with message received on valid mobile number
    console.log(arguments)    
});
*/

/*iam.userFaceauth("+9112345890", "full-path-to-image", function(err, token){
    console.log(err, token)
});*/

iam.setToken("token-received-from-userAuth-or-userFaceauth");

/*iam.groupCreate("groupName-of-choice", function(err, groupId){
    console.log(err, groupId);
})*/

/*iam.userCreate("+910000000001", JSON.stringify({"userName" : "user-name-of-developers-choice"}), function(err){
    console.log(err);
});
*/

/*iam.userAddFace("+910000000001", "full-path-to-image", function(err, faceIds){
    console.log(err, faceIds)
});*/

/*iam.groupAddUser("groupId-from-output-of-groupCreate", "+910000000001",function(err){
    console.log(err);
})*/

/*
iam.recognize("full-path-to-image", "groupId-from-output-of-groupCreate", function(err, result){
    console.log(err, result);
});
*/

/*iam.verify("full-path-to-image", "+910000000001", function(err, result){
    console.log(err, result);
});
*/
