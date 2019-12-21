//import axios from 'axios';
const axios = require('axios');

function logError(error){
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      throw error;
}
module.exports = class LibraClient {
    constructor(network, appkey, errorHandler=logError) {
        this.network = network;
        this.appkey = appkey;
        this.errorHandler = errorHandler;
    }

    async call_api(url, data, method = "GET") {
        let req = {
            baseURL: "https://apitest.moveonLibra.com",
            headers: { "Authorization": this.appkey },
            method: method,
            url: url,
        }
        if(method === "POST"){
            req["data"] = data;
        }else{
            req["params"] = data;
        }
        let that = this;
        const ret = await axios(req)
            .catch(function (error) {
                that.errorHandler(error);
            });
        return ret.data;
    };

    async postClientKey(valid_hours){
        let url = "/v1/authkey/clients";
        let data = {};
        data["valid_hours"] = valid_hours;
        return await this.call_api(url, data, 'POST');
    };
    
    async debugKey(){
        let url = "/v1/authkey/debug";
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getTransaction(version){
        let url = "/v1/transactions/{version}";
        url = url.replace("{version}", version);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getTransactionBatch(limit, start_version){
        let url = "/v1/transactions";
        let data = {};
        data["limit"] = limit;
        data["start_version"] = start_version;
        return await this.call_api(url, data);
    };
    
    async getTransactionLatestVersion(){
        let url = "/v1/transactions/latest_version";
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getTransactionLatest(limit){
        let url = "/v1/transactions/latest";
        let data = {};
        data["limit"] = limit;
        return await this.call_api(url, data);
    };
    
    async getTransactionAccSeq(sequence_number, account_address){
        let url = "/v1/transactions/acc_seq";
        let data = {};
        data["sequence_number"] = sequence_number;
        data["account_address"] = account_address;
        return await this.call_api(url, data);
    };
    
    async waitTransaction(sequence_number, account_address){
        let url = "/v1/transactions/wait_for_transaction";
        let data = {};
        data["sequence_number"] = sequence_number;
        data["account_address"] = account_address;
        return await this.call_api(url, data);
    };
    
    async postTransactionMint(force_offical, number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint";
        let data = {};
        data["force_offical"] = force_offical;
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.call_api(url, data, 'POST');
    };
    
    async postTransactionMintMol(number_of_micro_libra, receiver_account_address){
        let url = "/v1/transactions/mint_mol";
        let data = {};
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        return await this.call_api(url, data, 'POST');
    };
    
    async postTransactionTransfer(number_of_micro_libra, receiver_account_address, sender_account_address, wallet_id){
        let url = "/v1/transactions/transfer";
        let data = {};
        data["number_of_micro_libra"] = number_of_micro_libra;
        data["receiver_account_address"] = receiver_account_address;
        data["sender_account_address"] = sender_account_address;
        data["wallet_id"] = wallet_id;
        return await this.call_api(url, data, 'POST');
    };
    
    async getAccount(address){
        let url = "/v1/address/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getAccountResource(address){
        let url = "/v1/address/account_resource/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getAccountBalance(address){
        let url = "/v1/address/balance/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getAccountSequence(address){
        let url = "/v1/address/sequence_number/{address}";
        url = url.replace("{address}", address);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getAccountEventsSent(address, limit, start_event_seq_number){
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.call_api(url, data);
    };
    
    async getAccountEventsReceived(address, limit, start_event_seq_number){
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.call_api(url, data);
    };
    
    async getAccountEventsLatestSent(address, limit){
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.call_api(url, data);
    };
    
    async getAccountEventsLatestReceived(address, limit){
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.call_api(url, data);
    };
    
    async getAccountEvents(address, limit, start_event_seq_number){
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.call_api(url, data);
    };
    
    async getAccountEventsLatest(address, limit){
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.call_api(url, data);
    };
    
    async createWallet(name){
        let url = "/v1/wallets";
        let data = {};
        data["name"] = name;
        return await this.call_api(url, data, 'POST');
    };
    
    async getWallet(wallet_id){
        let url = "/v1/wallets/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async backupWallet(wallet_id){
        let url = "/v1/wallets/backup/{wallet_id}";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async createAccounts(wallet_id){
        let url = "/v1/wallets/{wallet_id}/accounts";
        url = url.replace("{wallet_id}", wallet_id);
        let data = {};
        return await this.call_api(url, data, 'POST');
    };
    
    async compileModule(source_file, publish_account_address){
        let url = "/v1/move/compile/module";
        let data = {};
        data["source_file"] = source_file;
        data["publish_account_address"] = publish_account_address;
        return await this.call_api(url, data, 'POST');
    };
    
    async compileScript(source_file, sender_address){
        let url = "/v1/move/compile/script";
        let data = {};
        data["source_file"] = source_file;
        data["sender_address"] = sender_address;
        return await this.call_api(url, data, 'POST');
    };
    
    async getCode(code_id){
        let url = "/v1/move/download/{code_id}";
        url = url.replace("{code_id}", code_id);
        let data = {};
        return await this.call_api(url, data);
    };
    
    async publish(publish_account_address, code_id){
        let url = "/v1/move/publish";
        let data = {};
        data["publish_account_address"] = publish_account_address;
        data["code_id"] = code_id;
        return await this.call_api(url, data, 'POST');
    };
    
    async execute(script_args, sender_account_address, code_id){
        let url = "/v1/move/execute";
        let data = {};
        data["script_args"] = script_args;
        data["sender_account_address"] = sender_account_address;
        data["code_id"] = code_id;
        return await this.call_api(url, data, 'POST');
    };
    
    async getVmErrorCodes(){
        let url = "/v1/libra/vm_errors";
        let data = {};
        return await this.call_api(url, data);
    };
    
    async getVmErrorCode(code){
        let url = "/v1/libra/vm_errors/{code}";
        url = url.replace("{code}", code);
        let data = {};
        return await this.call_api(url, data);
    };    
    
        
}
