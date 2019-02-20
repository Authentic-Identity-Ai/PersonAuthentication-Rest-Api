## /group/list

List all groups in the tenantId

* **URL** : `/group/list`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**
	Empty	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
		  "status": "success",
		  "statusCode": "200",
		  "result" : {
		  	"groups" : [{
				"groupName" : "string",
				"groupId" : "another-string",
				"creationTime" : 1504777998527, // Unix time stamp
				"userId" : "string",
				"sizeLimit" : 100
			}]
		  }
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/list' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{}'
            
           
    	
    	
