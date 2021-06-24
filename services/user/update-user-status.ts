import { getManagementToken } from "@services/auth0/get-management-token";
import axios, { AxiosRequestConfig } from "axios";

export async function updateUserStatus(
  userId: number,
  status: "paid" | "free"
) {
  const { AUTH0_ISSUER_BASE_URL } = process.env;
  const bearerToken = await getManagementToken();
  if (!bearerToken) {
    return;
  }
  const options: AxiosRequestConfig = {
    data: {
      user_metadata: {
        status,
      },
    },
    url: `${AUTH0_ISSUER_BASE_URL}/api/v2/users/${userId}`,

    method: "PATCH",
    headers: {
      authorization: `Bearer ${bearerToken}`,
      "content-type": "application/json",
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
