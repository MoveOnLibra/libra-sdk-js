const BaseAPI = require('../base_api');
module.exports = class TransactionAPI extends BaseAPI {
    async getTransaction(version){
        this.checkParam(version, "version");
        let url = "/v1/transactions/{version}";
        url = url.replace("{version}", version);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getTransactions(start_version, limit){
        this.checkParam(start_version, "start_version");
        let url = "/v1/transactions";
        let data = {};
        data["start_version"] = start_version;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getLatestVersion(){
        let url = "/v1/transactions/latest_version";
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getTransactionLatest(limit){
        let url = "/v1/transactions/latest";
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getByAccountSeq(account_address, sequence_number){
        this.checkParam(account_address, "account_address");
        this.checkParam(sequence_number, "sequence_number");
        let url = "/v1/transactions/acc_seq";
        let data = {};
        data["account_address"] = account_address;
        data["sequence_number"] = sequence_number;
        return await this.client.call_api(url, data);
    };
    async waitTransaction(account_address, sequence_number){
        this.checkParam(account_address, "account_address");
        this.checkParam(sequence_number, "sequence_number");
        let url = "/v1/transactions/wait_for_transaction";
        let data = {};
        data["account_address"] = account_address;
        data["sequence_number"] = sequence_number;
        return await this.client.call_api(url, data);
    };
    async mint(receiver_account_address, number_of_micro_libra, force_offical){
        this.checkParam(receiver_account_address, "receiver_account_address");
        this.checkParam(number_of_micro_libra, "number_of_micro_libra");
        let url = "/v1/transactions/mint";
        let data = {};
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["force_offical"] = force_offical;
        return await this.client.call_api(url, data, 'POST');
    };
    async mintMol(receiver_account_address, number_of_micro_libra){
        this.checkParam(receiver_account_address, "receiver_account_address");
        this.checkParam(number_of_micro_libra, "number_of_micro_libra");
        let url = "/v1/transactions/mint_mol";
        let data = {};
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        return await this.client.call_api(url, data, 'POST');
    };
    async createAccount(account_address){
        this.checkParam(account_address, "account_address");
        let url = "/v1/transactions/create_account";
        let data = {};
        data["account_address"] = account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async p2pTransfer(wallet_id, sender_account_address, receiver_account_address, number_of_micro_libra){
        this.checkParam(wallet_id, "wallet_id");
        this.checkParam(sender_account_address, "sender_account_address");
        this.checkParam(receiver_account_address, "receiver_account_address");
        this.checkParam(number_of_micro_libra, "number_of_micro_libra");
        let url = "/v1/transactions/transfer";
        let data = {};
        data["wallet_id"] = wallet_id;
        data["sender_account_address"] = sender_account_address;
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        return await this.client.call_api(url, data, 'POST');
    };
}
