import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.kurenode.com",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
});
axiosInstance.interceptors.request.use(
  (request) => {
    request.headers.Accept = "application/json";
    request.headers["Content-Type"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Got response");
    return response.data;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
