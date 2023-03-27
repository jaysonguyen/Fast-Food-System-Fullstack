import axios from "axios";

const CallApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default CallApi;
