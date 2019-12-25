const axios = require('axios');

module.exports = class MolClient {
    constructor(network, appkey, errorHandler, config={}) {
        this.network = network;
        this.appkey = appkey;
        this.errorHandler = errorHandler;
        this.config = config;
    }

    async call_api(url, data, method = "GET") {
        let req = {
            url: url,
            method: method,
        }
        if(this.config.baseURL){
            req.baseURL = this.config.baseURL;
        }else{
            if(this.network === "testnet" || this.network === "devnet"){
                req.baseURL = "https://apitest.moveonLibra.com";
            }else if(this.network === "mainnet"){
                req.baseURL = "https://api.moveonLibra.com";
            }else{
                throw new Error("Unknown network: "+ this.network); 
            }
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
                if(that.errorHandler){
                    that.errorHandler(error);
                }else{
                    throw error;
                }
            });
        return ret.data;
    };
}