## /user/enroll

Register a new user with the tenant and add the user to a group.

* **URL** : `/user/enroll`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'formdata'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**

	- userId
	- details
	- groupId
	- face1
	- face2
	- any\_label\_for\_face\_image

  All the images added with any key into the request body will be assumed to be the face of the user being registered.
  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
			"status" : "success",
			"statusCode" : "200",
			"result" : {
				"faceIds" : [{
					"label" : "the-key-name-for-file",
					"faceId" : "string-max-length-40-chars"
				}]
			}
		}
		
	

* **Sample Call:**

   	
    	curl -X POST https://in.secure.authenticidentityai.com/iam/v1/user/enroll \
			  -H 'tenantid: xxx' \
		  	  -H 'tenantkey: yyyy' \
		  	  -H 'token: zzzz' \
		  	  -H 'content-type: multipart/form-data;\
		  	  -F 'userId=aaaa' \
		  	  -F 'details=bbbb' \
		  	  -F 'groupId=cccc' \
		  	  -F 'face1=@image_path.png' 
		  	  -F 'face2=@image_path.png'
                

    	
