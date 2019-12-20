//import axios from 'axios';
const axios = require('axios');

module.exports = class LibraClient {
    constructor(network, appkey) {
        this.network = network;
        this.appkey = appkey;
    }

    async call_api(url, data, method = "GET") {
        const ret = await axios({
            baseURL: "https://apitest.moveonLibra.com",
            headers: { "Authorization": this.appkey },
            method: method,
            url: url,
            data: data,
        })
            .catch(function (error) {
                alert(error);
            });
        console.log(ret);
        return ret.data;
    };
    async get_balance(address){
        return await this.call_api("/v1/address/balance/"+address, {});
    };
}
