import org.json.*;
import java.io.*;

public class IAMUtils{
	private String baseUrl;
	private String tenantId, tenantKey, token;

	public IAMUtils(String tenantId, String tenantKey, String baseUrl){
		this.baseUrl = baseUrl;
		this.tenantId = tenantId;
		this.tenantKey = tenantKey;
	}

	public void setToken(String token){
		this.token = token;
	}

	public JSONObject userGetOTP(String userId){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			JSONObject request = new JSONObject();
			request.put("userId", userId);
			return HVJsonPost.execute(baseUrl + "user/getOTP", headers, request);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e){
			e.printStackTrace();
		}
		return null;
	}

	public JSONObject userAuth(String userId, String otp){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			JSONObject request = new JSONObject();
			request.put("userId", userId);
			request.put("otp", otp);
			return HVJsonPost.execute(baseUrl + "user/auth", headers, request);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e){
			e.printStackTrace();
		}
		return null;
	}

	public JSONObject userFaceAuth(String userId, String faceFilePath){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			HVMultipartPost multipartPost = new HVMultipartPost(baseUrl + "user/faceauth", headers);
			multipartPost.addFileEntity("image", "image/jpeg", faceFilePath);
			multipartPost.addTextEntity("userId", userId);
			return new JSONObject(multipartPost.executeRequest());
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return null;
	}

	public JSONObject groupCreate(String groupName){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			JSONObject request = new JSONObject();
			request.put("groupName", groupName);
			request.put("sizeLimit", 500);
			return HVJsonPost.execute(baseUrl + "group/create", headers, request);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e){
			e.printStackTrace();
		}
		return null;
	}

	public JSONObject userCreate(String userId, String details){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			JSONObject request = new JSONObject();
			request.put("userId", userId);
			request.put("details", details);
			return HVJsonPost.execute(baseUrl + "user/create", headers, request);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e){
			e.printStackTrace();
		}
		return null;
	}

	public JSONObject userAddFace(String userId, String faceFilePath){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			HVMultipartPost multipartPost = new HVMultipartPost(baseUrl + "user/addFace", headers);
			multipartPost.addFileEntity("image", "image/jpeg", faceFilePath);
			multipartPost.addTextEntity("userId", userId);
			return new JSONObject(multipartPost.executeRequest());
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return null;
	}


	public JSONObject groupAddUser(String groupId, String userId){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			JSONObject request = new JSONObject();
			request.put("userId", userId);
			request.put("groupId", groupId);
			return HVJsonPost.execute(baseUrl + "group/addUser", headers, request);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e){
			e.printStackTrace();
		}
		return null;
	}

	public JSONObject recognize(String groupId, String faceFilePath){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			HVMultipartPost multipartPost = new HVMultipartPost(baseUrl + "image/recognize", headers);
			multipartPost.addFileEntity("image", "image/jpeg", faceFilePath);
			multipartPost.addTextEntity("groupId", groupId);
			return new JSONObject(multipartPost.executeRequest());
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return null;
	}

	public JSONObject verify(String userId, String faceFilePath){
		try{
			JSONObject headers = new JSONObject();
			headers.put("tenantId", tenantId);
			headers.put("tenantKey", tenantKey);
			headers.put("token", token);
			HVMultipartPost multipartPost = new HVMultipartPost(baseUrl + "image/verify", headers);
			multipartPost.addFileEntity("image", "image/jpeg", faceFilePath);
			multipartPost.addTextEntity("userId", userId);
			return new JSONObject(multipartPost.executeRequest());
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return null;
	}

	/**
	*	@param image1Url: public url of the first face input image
	*	@param image2Url: public url of the second face input image
	*	@return String response from the server
	**/

	/**
	*	@param faceImage1Path: local path of the first face input image
	*	@param faceImage1Path: local path of the second face input image
	*	@return String response from the server
	**/
}