const BaseAPI = require('../base_api');
module.exports = class AuthkeyAPI extends BaseAPI {
    /** Create a new client api key
     * @param { number } valid_hours
     * @return { AuthKey } json object of 'Client API key'
     */
    async postClientKey(valid_hours){
        valid_hours = this.checkParam(valid_hours, "valid_hours", "number", true);
        let url = "/v1/authkey/clients";
        let data = {};
        data["valid_hours"] = valid_hours;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Get all activate client api key
     * @return { AuthKey } json object of 'List of Client API Keys'
     */
    async getClientKeys(){
        let url = "/v1/authkey/clients";
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Debug auth key. get it's appid , type , issue_time and expire_time etc.
     * @return { AuthKey } json object of 'Debug API Key'
     */
    async debugKey(){
        let url = "/v1/authkey/debug";
        let data = {};
        return await this.client.call_api(url, data);
    };
}
