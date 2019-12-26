const BaseAPI = require('../base_api');
module.exports = class AddressAPI extends BaseAPI {
    async getAccountState(address){
        this.checkParam(address, "address", "string", true);
        let url = "/v1/address/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountResource(address){
        this.checkParam(address, "address", "string", true);
        let url = "/v1/address/account_resource/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountBalance(address){
        this.checkParam(address, "address", "string", true);
        let url = "/v1/address/balance/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountSequence(address){
        this.checkParam(address, "address", "string", true);
        let url = "/v1/address/sequence_number/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
