## /group/edit

Edit Name and Size Limit.

* **URL** : `/group/edit`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'application/json'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**

	- groupId
	- params
		- groupName
		- sizeLimit 	
	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
		  "status": "success",
		  "statusCode": "200"
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
  			  --url 'https://in.secure.authenticidentityai.com/iam/v1/group/edit' \
            --header 'content-type: application/json' \
            --header 'tenantid: {{tenantid}}' \
            --header 'tenantkey: {{tenantkey}}' \
            --header 'token: {{token}}' \
            --data '{
					"groupId":"facetestaccess1500894070054914",
					"params":{
						"groupName":"PV96YXVwRB",
						"sizeLimit":631
					}
				}'
                
              

    	
