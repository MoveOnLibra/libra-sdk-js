const BaseAPI = require('../base_api');
module.exports = class MoveAPI extends BaseAPI {
    async compileModule(publish_account_address, source_file){
        this.checkParam(publish_account_address, "publish_account_address");
        this.checkParam(source_file, "source_file");
        let url = "/v1/move/compile/module";
        let data = {};
        data["publish_account_address"] = publish_account_address;
        data["source_file"] = source_file;
        return await this.client.call_api(url, data, 'POST');
    };
    async compileScript(sender_address, source_file){
        this.checkParam(source_file, "source_file");
        let url = "/v1/move/compile/script";
        let data = {};
        data["sender_address"] = sender_address;
        data["source_file"] = source_file;
        return await this.client.call_api(url, data, 'POST');
    };
    async getCode(code_id){
        this.checkParam(code_id, "code_id");
        let url = "/v1/move/download/{code_id}";
        url = url.replace("{code_id}", code_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async publish(code_id, publish_account_address){
        this.checkParam(code_id, "code_id");
        this.checkParam(publish_account_address, "publish_account_address");
        let url = "/v1/move/publish";
        let data = {};
        data["code_id"] = code_id;
        data["publish_account_address"] = publish_account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async execute(code_id, sender_account_address, script_args){
        this.checkParam(code_id, "code_id");
        this.checkParam(sender_account_address, "sender_account_address");
        this.checkParam(script_args, "script_args");
        let url = "/v1/move/execute";
        let data = {};
        data["code_id"] = code_id;
        data["sender_account_address"] = sender_account_address;
        data["script_args"] = script_args;
        return await this.client.call_api(url, data, 'POST');
    };
}
