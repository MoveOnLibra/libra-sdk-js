const BaseAPI = require('../base_api');
module.exports = class AuthkeyAPI extends BaseAPI {
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
