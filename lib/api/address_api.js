const BaseAPI = require('../base_api');
module.exports = class AddressAPI extends BaseAPI {
    /** Get account state from address. also automatically decode account resource of this address. btw, an address can have many other resources.
     * @param { string } address
     * @return { AccountState } json object of 'AccountState'
     */
    async getAccountState(address){
        address = this.checkParam(address, "address", "string", true);
        let url = "/v1/address/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get account resource from address.
     * @param { string } address
     * @return { AccountResource } json object of 'AccountResource'
     */
    async getAccountResource(address){
        address = this.checkParam(address, "address", "string", true);
        let url = "/v1/address/account_resource/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get account balance from address
     * @param { string } address
     * @return { BalanceResult } json object of 'Balance'
     */
    async getAccountBalance(address){
        address = this.checkParam(address, "address", "string", true);
        let url = "/v1/address/balance/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get account sequence_number from address
     * @param { string } address
     * @return { SequenceNumberResult } json object of 'sequence_number'
     */
    async getAccountSequence(address){
        address = this.checkParam(address, "address", "string", true);
        let url = "/v1/address/sequence_number/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
