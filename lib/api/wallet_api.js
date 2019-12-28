const BaseAPI = require('../base_api');
module.exports = class WalletAPI extends BaseAPI {
    /** Create a wallet belongs to the app authorized by auth key
     * @param { string } name
     * @return { Wallet } json object of 'Wallet'
     */
    async createWallet(name){
        name = this.checkParam(name, "name", "string", true);
        let url = "/v1/wallets";
        let data = {};
        data["name"] = name;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Get all wallets managed by the app authorized by auth key
     * @return { Wallet } json object of 'List of Wallets'
     */
    async getWallets(){
        let url = "/v1/wallets";
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get a wallet by id which should belongs to authorized app
     * @param { number } wallet_id
     * @return { Wallet } json object of 'Wallet'
     */
    async getWallet(wallet_id){
        wallet_id = this.checkParam(wallet_id, "wallet_id", "number", true);
        let url = "/v1/wallets/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Backup a wallet by id which should belongs to authorized app
     * @param { number } wallet_id
     * @return { Wallet } json object of 'Wallet'
     */
    async backupWallet(wallet_id){
        wallet_id = this.checkParam(wallet_id, "wallet_id", "number", true);
        let url = "/v1/wallets/backup/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Create an account in wallet
     * @param { number } wallet_id
     * @return { Account } json object of 'List of Account'
     */
    async createWalletAccount(wallet_id){
        wallet_id = this.checkParam(wallet_id, "wallet_id", "number", true);
        let url = "/v1/wallets/{wallet_id}/accounts";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data, 'POST');
    };
    /** Get all accounts of a wallet
     * @param { number } wallet_id
     * @return { Account } json object of 'Account'
     */
    async getWalletAccounts(wallet_id){
        wallet_id = this.checkParam(wallet_id, "wallet_id", "number", true);
        let url = "/v1/wallets/{wallet_id}/accounts";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
