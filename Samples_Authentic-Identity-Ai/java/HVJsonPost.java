import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;

/**
 * 
 */

public class HVJsonPost {

    private static final String LOG_TAG = "HVJsonPost";

    public static JSONObject execute(String mUrl, JSONObject headers, JSONObject jsonObject) throws IOException, JSONException {
        return execute(mUrl, headers, jsonObject, -1, -1);
    }

    /**
     *
     * @param mUrl
     * @param headers
     * @param jsonObject
     * @param connectTimeout -1 for default
     * @param readTimeout -1 for default
     * @return
     * @throws IOException
     * @throws JSONException
     */
    public static JSONObject execute(String mUrl, JSONObject headers, JSONObject jsonObject, int connectTimeout, int readTimeout) throws IOException, JSONException {

        /**
         * Starting an HttpUrlConnection for the given URL.
         */
        URL object = new URL(mUrl);
        HttpURLConnection con = (HttpURLConnection) object.openConnection();

        con.setDoOutput(true);
        con.setDoInput(true);

        if(connectTimeout != -1)
            con.setConnectTimeout(connectTimeout);

        if(readTimeout != -1)
            con.setReadTimeout(readTimeout);

        /**
         * Setting Content-type JSON and request method POST.
         */
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Accept", "application/json");
        // con.setRequestProperty("Content-Encoding", "gzip");
        // headers.put("x-compression", true);

        /**
         * Adding headers from the request.
         */
        if (headers != null) {
            Iterator<?> keys = headers.keys();
            while (keys.hasNext()) {
                String key = (String) keys.next();
                con.setRequestProperty(key, headers.getString(key));
            }
        }

        con.setRequestMethod("POST");

        /**
         * Writing out the jsonObject on to the connections outputstream.
         */
        OutputStreamWriter wr = new OutputStreamWriter(con.getOutputStream());
        wr.write(jsonObject.toString());
        wr.flush();

        /**
         * Running the request
         */
        int serverResponseCode = con.getResponseCode();
        String serverResponseMessage = con.getResponseMessage();


        InputStream inputStream = null;


        /**
         * If the request is successful, read the response from the body
         */
        try {
            inputStream = con.getInputStream();
        } catch (IOException ioe) {
            inputStream = con.getErrorStream();
        }

        /**
         * Building the response
         */
        BufferedReader br = new BufferedReader(new InputStreamReader((inputStream)));


        StringBuilder sb = new StringBuilder();
        String responseBody = "";

        String output;
        while ((output = br.readLine()) != null) {
            sb.append(output);
            responseBody = sb.toString();
        }

        JSONObject response = new JSONObject();
        response.put("statusCode", serverResponseCode);
        response.put("responseBody", responseBody);
        return response;
    }
}