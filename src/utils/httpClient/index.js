import axios from "axios";
const md5 = require('md5');

class _HttpClient {
  constructor() {
    this.baseUrl = "http://auportaldev.parshooshmand.com/api/v1.0";
    this.salt = "HcU'~8bvAB,KQr]%(U;`7kM?W";
    this.token = '4beb0iNcjZCHpbGT97tfv7f2GSBB3WDkCFUZ1CfMlVo48AIEY2L5ihcWexHkfm67pSRGF4HCQoRAlEMDcNIFaj1ZecZLbm1L160xtG9pxZMNUr8IlQaTGJDbYOEiyYQZ';
    this.userid = 2;

    this.instance = axios.create({
      headers: {
        post: {   
          userid: this.userid,
          token: this.token,
          hash: md5(this.userid+this.token+this.salt)
        },
        get: {
            userid: this.userid,
            token: this.token,
            hash: md5(this.userid+this.token+this.salt)
        }
      }
    })
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




const HttpClient = new _HttpClient();
export default HttpClient;
