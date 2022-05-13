import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "content-type": "application.json",
  },
  params: {
    language: "vi",
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    append_to_response: "videos",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.request.use(
  (reponse) => {
    if (reponse && reponse.data) {
      return reponse.data;
    }
    return reponse;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
