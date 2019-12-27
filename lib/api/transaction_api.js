const BaseAPI = require('../base_api');
module.exports = class TransactionAPI extends BaseAPI {
    /** Get a transaction by version id
     * @param { number } version
     * @return { SignedTransactionWithInfo } json object of 'SignedTransactionWithInfo'
     */
    async getTransaction(version){
        version = this.checkParam(version, "version", "number", true);
        let url = "/v1/transactions/{version}";
        url = url.replace("{version}", version);
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get a list of transactions by start_version and limit
     * @param { number } start_version
     * @param { number } limit
     * @return { List of SignedTransactionWithInfo } json object of 'List of SignedTransactionWithInfo'
     */
    async getTransactions(start_version, limit){
        start_version = this.checkParam(start_version, "start_version", "number", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/transactions";
        let data = {};
        data["start_version"] = start_version;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get the latest version number of transactions in libra blockchain
     * @return { Latest Version } json object of 'Latest Version'
     */
    async getLatestVersion(){
        let url = "/v1/transactions/latest_version";
        let data = {};
        return await this.client.call_api(url, data);
    };
    /** Get a list of latest transactions, return <limit> number transactions
     * @param { number } limit
     * @return { List of SignedTransactionWithInfo } json object of 'List of SignedTransactionWithInfo'
     */
    async getTransactionLatest(limit){
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/transactions/latest";
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get transaction by account_address and account sequence_number
     * @param { string } account_address
     * @param { number } sequence_number
     * @return { SignedTransactionWithInfo } json object of 'SignedTransactionWithInfo'
     */
    async getByAccountSeq(account_address, sequence_number){
        account_address = this.checkParam(account_address, "account_address", "string", true);
        sequence_number = this.checkParam(sequence_number, "sequence_number", "number", true);
        let url = "/v1/transactions/acc_seq";
        let data = {};
        data["account_address"] = account_address;
        data["sequence_number"] = sequence_number;
        return await this.client.call_api(url, data);
    };
    /** Wait transaction finish it's execution on blockchain
     * @param { string } account_address
     * @param { number } sequence_number
     * @return { SignedTransactionWithInfo } json object of 'SignedTransactionWithInfo'
     */
    async waitTransaction(account_address, sequence_number){
        account_address = this.checkParam(account_address, "account_address", "string", true);
        sequence_number = this.checkParam(sequence_number, "sequence_number", "number", true);
        let url = "/v1/transactions/wait_for_transaction";
        let data = {};
        data["account_address"] = account_address;
        data["sequence_number"] = sequence_number;
        return await this.client.call_api(url, data);
    };
    /** Mint micro-libra coins to an account.
     * @param { string } receiver_account_address
     * @param { number } number_of_micro_libra
     * @param { number } force_offical
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async mint(receiver_account_address, number_of_micro_libra, force_offical){
        receiver_account_address = this.checkParam(receiver_account_address, "receiver_account_address", "string", true);
        number_of_micro_libra = this.checkParam(number_of_micro_libra, "number_of_micro_libra", "number", true);
        force_offical = this.checkParam(force_offical, "force_offical", "number", false);
        let url = "/v1/transactions/mint";
        let data = {};
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["force_offical"] = force_offical;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Mol supported mint service to mint micro-libra coins to an account.
     * @param { string } receiver_account_address
     * @param { number } number_of_micro_libra
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async mintMol(receiver_account_address, number_of_micro_libra){
        receiver_account_address = this.checkParam(receiver_account_address, "receiver_account_address", "string", true);
        number_of_micro_libra = this.checkParam(number_of_micro_libra, "number_of_micro_libra", "number", true);
        let url = "/v1/transactions/mint_mol";
        let data = {};
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Create account on the blockchain.
     * @param { string } account_address
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async createAccount(account_address){
        account_address = this.checkParam(account_address, "account_address", "string", true);
        let url = "/v1/transactions/create_account";
        let data = {};
        data["account_address"] = account_address;
        return await this.client.call_api(url, data, 'POST');
    };
    /** Transfer micro-libra coins from sender account to receiver_account_address.
     * @param { number } wallet_id
     * @param { string } sender_account_address
     * @param { string } receiver_account_address
     * @param { number } number_of_micro_libra
     * @return { SignedTransaction } json object of 'SignedTransaction'
     */
    async p2pTransfer(wallet_id, sender_account_address, receiver_account_address, number_of_micro_libra){
        wallet_id = this.checkParam(wallet_id, "wallet_id", "number", true);
        sender_account_address = this.checkParam(sender_account_address, "sender_account_address", "string", true);
        receiver_account_address = this.checkParam(receiver_account_address, "receiver_account_address", "string", true);
        number_of_micro_libra = this.checkParam(number_of_micro_libra, "number_of_micro_libra", "number", true);
        let url = "/v1/transactions/transfer";
        let data = {};
        data["wallet_id"] = wallet_id;
        data["sender_account_address"] = sender_account_address;
        data["receiver_account_address"] = receiver_account_address;
        data["number_of_micro_libra"] = number_of_micro_libra;
        return await this.client.call_api(url, data, 'POST');
    };
}
