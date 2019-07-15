import axios from "axios";

class AuthHttpClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.axiosInstance = axios.create();
  }
  get(path, params) {
    return this.axiosInstance.get(this.baseUrl + path, {
      params
    });
  }
  post(path, params) {
    console.log(path, params);
    return this.axiosInstance.post(this.baseUrl + path, params);
  }
}

export default AuthHttpClient;
