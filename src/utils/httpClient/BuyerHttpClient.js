import axios from "axios";
import md5Helper from "../md5Helper";
class BuyerHttpClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.salt = process.env.REACT_APP_SALT;
    this.token =
      "1reV226FJPJHd8dso4FKh179UPhSZOPT4sX5umbx4hic7Ic2r0lwGRHZwsrm5cuQEt2TKqphKzHPMgHJatI5MS0SHCDJhZoHH0zNh9HtYzQDkSKlvnV83dogIFH7YQxI";
    this.userid = 1;
    this.hash = md5Helper(this.userid + this.token + this.salt);
    window.localStorage.setItem("hash", this.hash);

    this.defaultHeaders = {
      userid: this.userid,
      token: this.token,
      hash: this.hash
    };
    this.instance = axios.create({
      headers: {
        post: this.defaultHeaders,
        get: this.defaultHeaders
      }
    });
  }
  get(path, params) {
    return this.instance.get(this.baseUrl + path, {
      params
    });
  }
  post(path, params) {
    return this.instance.post(this.baseUrl + path, params);
  }
}

export default BuyerHttpClient;
