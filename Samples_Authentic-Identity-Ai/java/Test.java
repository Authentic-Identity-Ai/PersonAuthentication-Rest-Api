public class Test{

	public static void main(String[] args){

		IAMUtils iam = new IAMUtils("tenantId", "tenantKey", "https://in.secure.hyperverge.co/iam/v1/"); //replace tenantId and tenantKey.

		// System.out.println(iam.userGetOTP("+91123890"));

		// System.out.println(iam.userAuth("+91123890", "8179")); //replace the 2nd param with the OTP received on mobile

		System.out.println(iam.userFaceAuth("+91123890", "full-path-to-image"));

		iam.setToken("token-from-the-output-of-userAuth-or-userFaceauth");

		// System.out.println(iam.groupCreate("groupName of developer's choice"));

		// System.out.println(iam.userCreate("+910000000003", "{\"userName\" : \"userName of developer's choice\"}"));

		// System.out.println(iam.userAddFace("+910000000003", "full-path-to-image"));

		// System.out.println(iam.groupAddUser("groupId-from-the-output-of-groupCreate", "+910000000003"));

		// System.out.println(iam.recognize("groupId-from-the-output-of-groupCreate", "full-path-to-image"));

		// System.out.println(iam.verify("+910000000003", "full-path-to-image"));
	}
}
