## /user/get


* **URL** : `/user/get`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**

	- userId
  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
		  "status": "success",
		  "statusCode": "200",
		  "result": {
		    "userId": "0123456789",
		    "details": "{\"new\" : true}",
		    "faceId": [
		      "123q5678ghwe"
		    ],
		    "tenantId": "tenantid",
		    "roles": [
		      "user"
		    ],
		    "groups": [
		      {
		        "role": "groupAdmin",
		        "groupId": "default"
		      }
		    ]
		  }
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/user/get' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{"userId":"+919501551079"}'
    
    	
    	
