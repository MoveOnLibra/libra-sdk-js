const BaseAPI = require('../base_api');
module.exports = class LibraAPI extends BaseAPI {
    async getVmErrorCodes(){
        let url = "/v1/libra/vm_errors";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getVmErrorCode(code){
        code = this.checkParam(code, "code", "integer", true);
        let url = "/v1/libra/vm_errors/{code}";
        url = url.replace("{code}", code);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
