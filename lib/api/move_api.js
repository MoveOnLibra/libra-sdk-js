module.exports = class MoveApi {
    constructor(client) {
        this.client = client;
    }
    async compileModule(source_file, publish_account_address){
        let url = "/v1/move/compile/module";
        let data = {};
        data["source_file"] = source_file;
        data["publish_account_address"] = publish_account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async compileScript(source_file, sender_address){
        let url = "/v1/move/compile/script";
        let data = {};
        data["source_file"] = source_file;
        data["sender_address"] = sender_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async getCode(code_id){
        let url = "/v1/move/download/{code_id}";
        url = url.replace("{code_id}", code_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async publish(publish_account_address, code_id){
        let url = "/v1/move/publish";
        let data = {};
        data["publish_account_address"] = publish_account_address;
        data["code_id"] = code_id;
        return await this.client.call_api(url, data, 'POST');
    };
    async execute(script_args, sender_account_address, code_id){
        let url = "/v1/move/execute";
        let data = {};
        data["script_args"] = script_args;
        data["sender_account_address"] = sender_account_address;
        data["code_id"] = code_id;
        return await this.client.call_api(url, data, 'POST');
    };
}
