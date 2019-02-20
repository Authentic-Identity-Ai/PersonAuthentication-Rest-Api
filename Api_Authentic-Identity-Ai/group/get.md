## /group/get

Obtain all information about the group.


* **URL** : `/group/get`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**

	- groupId
	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
		  "status": "success",
		  "statusCode": "200",
		  "result": {
		    "groupName": "qwerty",
		    "sizeLimit": 100,
		    "users": [
		      {
		        "userId": "testuser",
		        "groupRole": "groupAdmin"
		      }
		    ]
		  }
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/get' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{"groupId":"facetestaccess"}'
            
        
    	
