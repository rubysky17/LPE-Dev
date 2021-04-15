import { API_ENDPOINT } from "../../const/Api";
import { KEY_TOKEN } from "../../const/App";

import axios from "axios";

export async function fetchData(url) {
  try {
    const response = await axios({
      method: "get",
      url: API_ENDPOINT + url,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchWithToken(url) {
  const token = localStorage.getItem(KEY_TOKEN);

  try {
    const response = await axios({
      method: "get",
      url: API_ENDPOINT + url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}