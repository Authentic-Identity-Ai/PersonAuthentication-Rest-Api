## /image/verify

Verify the person in the image.

* **URL** : `/image/verify`
  
* **Method:** `POST`

* **Header**
	
	- content-type : 'formdata'
	- tenantid 
	- tenantkey
	- token
	
* **Request Body**
	- image
	- userId
	  
* **Success Response:**

  * **Code:** 200 <br />
  * Schema : 
		
			
		{
			“status”:“success”,
			“statusCode”:“200",
			“result”:[{
				“conf”:98,
				“faceId”:“8W03lZcW4gyfVqNNtKik5rilZ78347",
				“left-top-x”:9.286,
				“left-top-y”:8.046,
				“width”:78.57,
				“height”:85.06,
				“personId”:“+918015768860",
				“label”:“image0"
				}
			]
		}
		
	

* **Sample Call:**

   	
    	curl --request POST \
			  --url 'https://in.secure.authenticidentityai.com/iam/v1/image/verify' \
			  --header 'content-type: multipart/form-data \
			  --header 'tenantid: {{tenantid}}' \
			  --header 'tenantkey: {{tenantkey}}' \
			  --header 'token: {{token}}' \
			  --form 'userId=+919501551079' \
			  --form image0=@image_path.jpg    	
    	
