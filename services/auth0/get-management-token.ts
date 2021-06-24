import axios, { AxiosRequestConfig } from "axios";
export async function getManagementToken(): Promise<string> {
  const {
    AUTH0_ISSUER_BASE_URL,
    AUTH0_SERVER_CLIENT_ID,
    AUTH0_SERVER_CLIENT_SECRET,
  } = process.env;
  const options: AxiosRequestConfig = {
    url: `${AUTH0_ISSUER_BASE_URL}/oauth/token`,
    data: {
      client_id: AUTH0_SERVER_CLIENT_ID,
      client_secret: AUTH0_SERVER_CLIENT_SECRET,
      audience: `${AUTH0_ISSUER_BASE_URL}/api/v2/`,
      grant_type: "client_credentials",
    },
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(options.url, options.data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      return res.data?.access_token;
    })
    .catch((err) => console.log(err));
}
