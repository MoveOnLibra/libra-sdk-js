const BaseAPI = require('../base_api');
module.exports = class WalletAPI extends BaseAPI {
    async createWallet(name){
        this.checkParam(name, "name");
        let url = "/v1/wallets";
        let data = {};
        data["name"] = name;
        return await this.client.call_api(url, data, 'POST');
    };
    async getWallets(){
        let url = "/v1/wallets";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getWallet(wallet_id){
        this.checkParam(wallet_id, "wallet_id");
        let url = "/v1/wallets/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async backupWallet(wallet_id){
        this.checkParam(wallet_id, "wallet_id");
        let url = "/v1/wallets/backup/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async createWalletAccount(wallet_id){
        this.checkParam(wallet_id, "wallet_id");
        let url = "/v1/wallets/{wallet_id}/accounts";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data, 'POST');
    };
    async getWalletAccounts(wallet_id){
        this.checkParam(wallet_id, "wallet_id");
        let url = "/v1/wallets/{wallet_id}/accounts";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.client.call_api(url, data);
    };
}
