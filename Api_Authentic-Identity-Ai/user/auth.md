## /user/auth

If the tenant uses phone numbers as userId, then this API call can be used to obtain the user token. This has to be called after the /user/getOTP api call.

* **URL** : `/user/auth`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	
* **Request Body**

	- userId
	- otp 
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
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/user/auth' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --data '{"userId":"+919501551079","otp":"1234","permanent" : false}'
        
    	
    	
