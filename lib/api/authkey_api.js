module.exports = class AuthkeyAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function(param, param_name){
            if (param === undefined || param === null) {
                throw new Error("Missing the required parameter: "+param_name);
            }
        }
    }
    async postClientKey(valid_hours){
        this.checkParam(valid_hours, "valid_hours");
        let url = "/v1/authkey/clients";
        let data = {};
        data["valid_hours"] = valid_hours;
        return await this.client.call_api(url, data, 'POST');
    };
    async getClientKeys(){
        let url = "/v1/authkey/clients";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async debugKey(){
        let url = "/v1/authkey/debug";
        let data = {};
        return await this.client.call_api(url, data);
    };
}
