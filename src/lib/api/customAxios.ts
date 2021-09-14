import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  responseType: "json",
});

export default customAxios;
