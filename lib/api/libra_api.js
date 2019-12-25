module.exports = class LibraAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function(param, param_name){
            if (param === undefined || param === null) {
                throw new Error("Missing the required parameter: "+param_name);
            }
        }
    }
    async getVmErrorCodes(){
        let url = "/v1/libra/vm_errors";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getVmErrorCode(code){
        this.checkParam(code, "code");
        let url = "/v1/libra/vm_errors/{code}";
        url = url.replace("{code}", code);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
