const BaseAPI = require('../base_api');
module.exports = class MoveAPI extends BaseAPI {
    /** Compile move module of the given source file
     * @param { string } publish_account_address
     * @param { file } source_file
     * @return { the compiled bytecode id } json object of 'the compiled bytecode id'
     */
    async compileModule(publish_account_address, source_file){
        publish_account_address = this.checkParam(publish_account_address, "publish_account_address", "string", true);
        source_file = this.checkParam(source_file, "source_file", "file", true);
        let url = "/v1/move/compile/module";
        let data = {};
        data["publish_account_address"] = publish_account_address;
        data["source_file"] = source_file;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Compile move script of the given source file
     * @param { string } sender_address
     * @param { file } source_file
     * @return { the compiled bytecode id } json object of 'the compiled bytecode id'
     */
    async compileScript(sender_address, source_file){
        sender_address = this.checkParam(sender_address, "sender_address", "string", false);
        source_file = this.checkParam(source_file, "source_file", "file", true);
        let url = "/v1/move/compile/script";
        let data = {};
        data["sender_address"] = sender_address;
        data["source_file"] = source_file;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Download compiled move bytecode by id
     * @param { string } code_id
     * @return { the compiled bytecode id } json object of 'the compiled bytecode id'
     */
    async getCode(code_id){
        code_id = this.checkParam(code_id, "code_id", "string", true);
        let url = "/v1/move/download/{code_id}";
        url = url.replace("{code_id}", code_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Publish move module on-chain
     * @param { string } code_id
     * @param { string } publish_account_address
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async publish(code_id, publish_account_address){
        code_id = this.checkParam(code_id, "code_id", "string", true);
        publish_account_address = this.checkParam(publish_account_address, "publish_account_address", "string", true);
        let url = "/v1/move/publish";
        let data = {};
        data["code_id"] = code_id;
        data["publish_account_address"] = publish_account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Execute custom move script on-chain
     * @param { string } code_id
     * @param { string } sender_account_address
     * @param { array } script_args
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async execute(code_id, sender_account_address, script_args){
        code_id = this.checkParam(code_id, "code_id", "string", true);
        sender_account_address = this.checkParam(sender_account_address, "sender_account_address", "string", true);
        script_args = this.checkParam(script_args, "script_args", "array", true);
        let url = "/v1/move/execute";
        let data = {};
        data["code_id"] = code_id;
        data["sender_account_address"] = sender_account_address;
        data["script_args"] = script_args;
        return await this.client.call_api(url, data, 'POST');
    };
}
