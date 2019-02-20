## /group/create

Create a group with a name and limit. The limit is still not yet enforced, will be enforced soon. The response would include the groupId which will be the unique identifier for the group for future reference.

* **URL** : `/group/create`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**

	- groupName
	- sizeLimit
	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
		  "status": "success",
		  "statusCode": "200",
		  "result": {
		    "groupId": "weryui4589fgh"
		  }
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/create' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{"groupName":"facetestaccess","sizeLimit":100}'
    	
    
    	
