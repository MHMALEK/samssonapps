import axios from 'axios';


class _HttpClient {
    constructor() {
        this.token = 'token';
        // this.baseUrl = 'http://auportal.parshooshmand.com/api/v1.0'
        this.baseUrl = 'http://dummy.restapiexample.com/api/v12';
    }
    get(path, params) {
        return axios.get(this.baseUrl + path, {
            params
        })
    }
    post(path, params) {
        return axios.post(this.baseUrl + path, params)
    }
    // ToDo: put() {}
    // ToDo: delete() {}

}

const HttpClient = new _HttpClient;
export default HttpClient;