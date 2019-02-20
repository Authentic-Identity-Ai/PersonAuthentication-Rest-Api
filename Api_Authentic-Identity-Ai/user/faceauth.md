## /user/faceauth

Once the user's face(s) are registered with either enroll or addFace API, this API allows to authenticate the user. The response of this API would provide the user's token, that can be used for making API calls on behalf of the user.


* **URL** : `/user/faceauth`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'formdata'
	- tenantid 
	- tenantkey
	
* **Request Body**

	- userId
	- image : face image
	- permanent : true/false (boolean) /\* A temporary token expires in 15 mins \*/
  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
			"status" : "success",
			"statusCode" : "200",
			"result" : {
				"token": "*************************************"
			}
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
			--url 'https://in.secure.authenticidentityai.com/iam/v1/user/faceauth' \
			--header 'content-type: multipart/form-data' \
			--header 'tenantid: {{tenantid}}' \
			--header 'tenantkey: {{tenantkey}}' \
			--form 'userId=+919501551079' \
			--form image=@image_path.jpg \
			--form permanent=false
            
    	
    	
