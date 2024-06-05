import axios from "axios";

const mainInstance = axios.create({
  baseURL: "https://gateway.scan-interfax.ru/api/v1/",
});

mainInstance.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});
mainInstance.interceptors.response.use((response) => response.data);

export default mainInstance;
