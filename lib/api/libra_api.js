module.exports = class LibraApi {
    constructor(client) {
        this.client = client;
    }
    async getVmErrorCodes(){
        let url = "/v1/libra/vm_errors";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getVmErrorCode(code){
        let url = "/v1/libra/vm_errors/{code}";
        url = url.replace("{code}", code);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
