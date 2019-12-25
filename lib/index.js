const MolClient = require('./client.js');
const AddressAPI = require('./api/address_api');
const AuthkeyAPI = require('./api/authkey_api');
const EventAPI = require('./api/event_api');
const LibraAPI = require('./api/libra_api');
const MoveAPI = require('./api/move_api');
const TransactionAPI = require('./api/transaction_api');
const WalletAPI = require('./api/wallet_api');

function parseError(error){
  if (error.response) {
    return error.response.status + ": " + error.response.data.error;
  } else if (error.request) {
    return error.request;
  } else {
    return error.message;
  }
}

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
      //console.log(error.config);
      throw error;
}

module.exports = class LibraClient {
    constructor(network, appkey=null, errorHandler=logError) {
        if (network === undefined || network === null) {
            throw new Error("Missing the required parameter 'network'.");
        }
        this.apiClient = new MolClient(network, appkey, errorHandler);
        this.parseError = parseError;
        this.addressAPI = new AddressAPI(this.apiClient);
        this.authkeyAPI = new AuthkeyAPI(this.apiClient);
        this.eventAPI = new EventAPI(this.apiClient);
        this.libraAPI = new LibraAPI(this.apiClient);
        this.moveAPI = new MoveAPI(this.apiClient);
        this.transactionAPI = new TransactionAPI(this.apiClient);
        this.walletAPI = new WalletAPI(this.apiClient);
    }
        
}
