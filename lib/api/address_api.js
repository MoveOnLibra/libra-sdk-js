module.exports = class AddressAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function(param, param_name){
            if (param === undefined || param === null) {
                throw new Error("Missing the required parameter: "+param_name);
            }
        }
    };
    
    async getAccountState(address){
        let url = "/v1/address/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountResource(address){
        let url = "/v1/address/account_resource/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountBalance(address){
        this.checkParam(address, "address");
        let url = "/v1/address/balance/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getAccountSequence(address){
        let url = "/v1/address/sequence_number/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
