const BaseAPI = require('../base_api');
module.exports = class LibraAPI extends BaseAPI {
    /** Get all error codes and explanations of vm errors when execute transactions
     * @return { object } json object of '/v1/libra/vm_errors'
     */
    async getVmErrorCodes(){
        let url = "/v1/libra/vm_errors";
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get error explanation for a vm error by code
     * @param { number } code
     * @return { object } json object of '/v1/libra/vm_errors/{code}'
     */
    async getVmErrorCode(code){
        code = this.checkParam(code, "code", "number", true);
        let url = "/v1/libra/vm_errors/{code}";
        url = url.replace("{code}", code);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
