## /group/listUsers

Lists users in a group

* **URL** : `/group/listUsers`
  
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
		  "result" : {
		  	"users" : [{
				"userId" : "string",
				"details" : "string",
				"roles" : ["user/admin"],
				"groups" : [{
					"groupId" : "string",
					"role" : "user/groupAdmin"
				}],
				"faces" : ["string"]
			}]
		  }
		}
		
	

* **Sample Call:**

    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/listUsers' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{"groupId":"10CwUv4L","userId":"+919501551079","groupRole":"user"}'
    	
    	
