module.exports = class TransactionAPI {
    constructor(client) {
        this.client = client;
    }
    async getTransaction(version){
        let url = "/v1/transactions/{version}";
        url = url.replace("{version}", version);
        let data = {};
        return await this.client.call_api(url, data);
    };
    async getTransactionBatch(limit, start_version){
        let url = "/v1/transactions";
        let data = {};
        data["limit"] = limit;
        data["start_version"] = start_version;
        return await this.client.call_api(url, data);
    };
    async getTransactionLatestVersion(){
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
    async getTransactionAccSeq(sequence_number, account_address){
        let url = "/v1/transactions/acc_seq";
        let data = {};
        data["sequence_number"] = sequence_number;
        data["account_address"] = account_address;
        return await this.client.call_api(url, data);
    };
    async waitTransaction(sequence_number, account_address){
        let url = "/v1/transactions/wait_for_transaction";
        let data = {};
        data["sequence_number"] = sequence_number;
        data["account_address"] = account_address;
        return await this.client.call_api(url, data);
    };
    async postTransactionMint(force_offical, number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint";
        let data = {};
        data["force_offical"] = force_offical;
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async getTransactionMint(force_offical, number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint";
        let data = {};
        data["force_offical"] = force_offical;
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.client.call_api(url, data);
    };
    async postTransactionMintMol(number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint_mol";
        let data = {};
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    async getTransactionMintMol(number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint_mol";
        let data = {};
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.client.call_api(url, data);
    };
    async postTransactionTransfer(number_of_micro_libra, receiver_account_address, sender_account_address, wallet_id){
        let url = "/v1/transactions/transfer";
        let data = {};
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        data["sender_account_address"] = sender_account_address;
        data["wallet_id"] = wallet_id;
        return await this.client.call_api(url, data, 'POST');
    };
}
