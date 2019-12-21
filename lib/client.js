const axios = require('axios');

module.exports = class MolClient {
    constructor(network, appkey, errorHandler) {
        this.network = network;
        this.appkey = appkey;
        this.errorHandler = errorHandler;
    }

    async call_api(url, data, method = "GET") {
        let req = {
            baseURL: "https://apitest.moveonLibra.com",
            method: method,
            url: url,
        }
        if(this.appkey){
            req.headers = { "Authorization": this.appkey }
        }
        if(method === "POST"){
            req["data"] = data;
        }else{
            req["params"] = data;
        }
        let that = this;
        const ret = await axios(req)
            .catch(function (error) {
                that.errorHandler(error);
            });
        return ret.data;
    };
}