Javascript SDK for Libra Network and Move Smart Contract powered by MoveOnLibra OpenAPI.

## Introduction
The [MoveOnLibra/mol](https://www.MoveOnLibra.com) open API is used to develop [Libra](https://libra.org) applications and smart contracts, aiming to make life as a Libra developer easier. The API is built using RESTful endpoints and standard HTTP verbs. 

* Http status codes are used to indicate the status of the API call.
* JSON is returned on all our API responses, including errors, with a consistent structure for all messages.
* Text fields support UTF-8.


## Installation

Using npm:

```bash
$ npm install libra-sdk-mol
```

Using bower:

```bash
$ bower install libra-sdk-mol
```

Using yarn:

```bash
$ yarn add libra-sdk-mol
```

Using cdn:

```html
<script src="https://unpkg.com/libra-sdk-mol/dist/moveonlibra.browser.js"></script>
```

## Usage
In nodejs:

```javascript
const LibraClient = require('libra-sdk-mol');
var client = new LibraClient("testnet");
try{
	address = "000000000000000000000000000000000000000000000000000000000a550c18";
	data = await client.addressAPI.getAccountBalance(address);
    console.log(data.balance);
} catch (error) {
    console.log(error);
}
```

In browser:
```javascript
<script src="https://unpkg.com/libra-sdk-mol/dist/moveonlibra.browser.js"></script>
<script>
	var client = new LibraClient("testnet");
	try{
		address = "000000000000000000000000000000000000000000000000000000000a550c18";
		data = await client.addressAPI.getAccountBalance(address);
		console.log(data.balance);
	} catch (error) {
		console.log(error);
	}
</script>
```

### Mint some coins to address
```javascript
// mint 123 micro-libra to address, the call is blocked until the mint is finished or failed.
tx = await client.transactionAPI.mint(address, 123);
assert 123 == tx.raw_txn.payload.Script.args[1].U64;
// get the transaction status
console.log(tx.transaction_info.major_status)
```


### Query the income and expenditure of an address

For example, get the latest 5 incomes of an address：
```javascript
events = await client.eventAPI.getAccountEventsLatestReceived(address, 5);
for(var i in events) {
	console.log(events[i].type_tag.Struct.name);//"ReceivedPaymentEvent";
	console.log(events[i].event_data_decode.amount) //received amount in micro-libra
}
```

Get the latest 5 expenditure of an address：
```javascript
events = await client.eventAPI.getAccountEventsLatestSent(address, 5);
for(var i in events) {
	console.log(events[i].type_tag.Struct.name);//"SentPaymentEvent"
	console.log(events[i].event_data_decode.amount); //sent amount in micro-libra
}
```

Get the latest 5 income and expenditure in one call of an address：
```javascript
events = await client.eventAPI.getAccountEventsLatest(address, 5);
console.log(events["sent"])
console.log(events["received"])
```


## About API Authorization
You can access the MoveOnLibra public API without any prerequisites, there are 3 groups of public API:

* **Address**, all address API is public available.
* **Event**, all events API  is public available.
* **Transaction**, all **GET** method API under Transaction group is public available.

Following API need a token to access:

* **Wallet**, all wallet API need API token to access.
* **Move**, all move API need API token to access.
* **Transaction**, all **POST** method API under Transaction group need API token to access except `mint`.


Access to MoveOnLibra's protected API requires authorization. You need to [sign up](https://www.moveonlibra.com/users/sign_up) to get your appkey.

For example, using `appkey` to create wallet and account: 

```javascript
var client = new LibraClient("testnet", appkey);
wallet = await client.walletAPI.createWallet(name)
account = await client.walletAPI.createWalletAccount(wallet)
```

## Example Project

We wrote an Libra wallet demo using `libra-sdk-mol` package, the source code is here [libra-wallet-demo](https://github.com/MoveOnLibra/libra-wallet-demo-javascript).

The online access url of the wallet is [https://www.moveonlibra.com/wallet.html](https://www.moveonlibra.com/wallet.html).


## API List

### AddressAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountState**](docs/api/address_api.md#getAccountState ) | **GET** /v1/address/{address} | Get account state from address. also automatically decode account resource of this address. btw, an address can have many other resources.
[**getAccountResource**](docs/api/address_api.md#getAccountResource ) | **GET** /v1/address/account_resource/{address} | Get account resource from address.
[**getAccountBalance**](docs/api/address_api.md#getAccountBalance ) | **GET** /v1/address/balance/{address} | Get account balance from address
[**getAccountSequence**](docs/api/address_api.md#getAccountSequence ) | **GET** /v1/address/sequence_number/{address} | Get account sequence_number from address

### AuthkeyAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**postClientKey**](docs/api/authkey_api.md#postClientKey ) | **POST** /v1/authkey/clients | Create a new client api key
[**getClientKeys**](docs/api/authkey_api.md#getClientKeys ) | **GET** /v1/authkey/clients | Get all activate client api key
[**debugKey**](docs/api/authkey_api.md#debugKey ) | **GET** /v1/authkey/debug | Debug auth key. get it's appid , type , issue_time and expire_time etc.

### EventAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountEventsSent**](docs/api/event_api.md#getAccountEventsSent ) | **GET** /v1/events/sent/{address} | Get events sent from this account by address
[**getAccountEventsReceived**](docs/api/event_api.md#getAccountEventsReceived ) | **GET** /v1/events/received/{address} | Get events received from this account by address
[**getAccountEventsLatestSent**](docs/api/event_api.md#getAccountEventsLatestSent ) | **GET** /v1/events/latest/sent/{address} | Get latest events sent from this account by address
[**getAccountEventsLatestReceived**](docs/api/event_api.md#getAccountEventsLatestReceived ) | **GET** /v1/events/latest/received/{address} | Get latest events received from this account by address
[**getAccountEvents**](docs/api/event_api.md#getAccountEvents ) | **GET** /v1/events/{address} | Get events both sent and received of this account by address
[**getAccountEventsLatest**](docs/api/event_api.md#getAccountEventsLatest ) | **GET** /v1/events/latest/{address} | Get latest events both sent and received of this account by address

### LibraAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVmErrorCodes**](docs/api/libra_api.md#getVmErrorCodes ) | **GET** /v1/libra/vm_errors | Get all error codes and explanations of vm errors when execute transactions
[**getVmErrorCode**](docs/api/libra_api.md#getVmErrorCode ) | **GET** /v1/libra/vm_errors/{code} | Get error explanation for a vm error by code

### MoveAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**compileModule**](docs/api/move_api.md#compileModule ) | **POST** /v1/move/compile/module | Compile move module of the given source file
[**compileScript**](docs/api/move_api.md#compileScript ) | **POST** /v1/move/compile/script | Compile move script of the given source file
[**getCode**](docs/api/move_api.md#getCode ) | **GET** /v1/move/download/{code_id} | Download compiled move bytecode by id
[**publish**](docs/api/move_api.md#publish ) | **POST** /v1/move/publish | Publish move module on-chain
[**execute**](docs/api/move_api.md#execute ) | **POST** /v1/move/execute | Execute custom move script on-chain

### TransactionAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](docs/api/transaction_api.md#getTransaction ) | **GET** /v1/transactions/{version} | Get a transaction by version id
[**getTransactions**](docs/api/transaction_api.md#getTransactions ) | **GET** /v1/transactions | Get a list of transactions by start_version and limit
[**getLatestVersion**](docs/api/transaction_api.md#getLatestVersion ) | **GET** /v1/transactions/latest_version | Get the latest version number of transactions in libra blockchain
[**getTransactionLatest**](docs/api/transaction_api.md#getTransactionLatest ) | **GET** /v1/transactions/latest | Get a list of latest transactions, return <limit> number transactions
[**getByAccountSeq**](docs/api/transaction_api.md#getByAccountSeq ) | **GET** /v1/transactions/acc_seq | Get transaction by account_address and account sequence_number
[**waitTransaction**](docs/api/transaction_api.md#waitTransaction ) | **GET** /v1/transactions/wait_for_transaction | Wait transaction finish it's execution on blockchain
[**mint**](docs/api/transaction_api.md#mint ) | **POST** /v1/transactions/mint | Mint micro-libra coins to an account.
[**mintMol**](docs/api/transaction_api.md#mintMol ) | **POST** /v1/transactions/mint_mol | Mol supported mint service to mint micro-libra coins to an account.
[**createAccount**](docs/api/transaction_api.md#createAccount ) | **POST** /v1/transactions/create_account | Create account on the blockchain.
[**p2pTransfer**](docs/api/transaction_api.md#p2pTransfer ) | **POST** /v1/transactions/transfer | Transfer micro-libra coins from sender account to receiver_account_address.

### WalletAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWallet**](docs/api/wallet_api.md#createWallet ) | **POST** /v1/wallets | Create a wallet belongs to the app authorized by auth key
[**getWallets**](docs/api/wallet_api.md#getWallets ) | **GET** /v1/wallets | Get all wallets managed by the app authorized by auth key
[**getWallet**](docs/api/wallet_api.md#getWallet ) | **GET** /v1/wallets/{wallet_id} | Get a wallet by id which should belongs to authorized app
[**backupWallet**](docs/api/wallet_api.md#backupWallet ) | **GET** /v1/wallets/backup/{wallet_id} | Backup a wallet by id which should belongs to authorized app
[**createWalletAccount**](docs/api/wallet_api.md#createWalletAccount ) | **POST** /v1/wallets/{wallet_id}/accounts | Create an account in wallet
[**getWalletAccounts**](docs/api/wallet_api.md#getWalletAccounts ) | **GET** /v1/wallets/{wallet_id}/accounts | Get all accounts of a wallet

