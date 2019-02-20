## /user/getOTP

If the tenant uses the phone numbers as userIds then this API can be utilized for authenticating the user and obtaining the user token. The userId would have to include the country code as well. Eg. +1 - for U.S.A, +91 - India etc.

* **URL** : `/user/getOTP`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	
* **Request Body**

	- userId
	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
			"status" : "success",
			"statusCode" : "200"
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/remove' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --data '{"userId" : "+919501551079"}'
            
            
          
    	
    	
