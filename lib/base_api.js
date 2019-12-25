module.exports = class BaseAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function(param, param_name){
            if (param === undefined || param === null) {
                throw new Error("Missing the required parameter: "+param_name);
            }
        }
    }
}