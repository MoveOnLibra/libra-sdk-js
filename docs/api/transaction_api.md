## TransactionAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](transaction_api.md#getTransaction ) | **GET** /v1/transactions/{version} | Get a transaction by version id
[**getTransactions**](transaction_api.md#getTransactions ) | **GET** /v1/transactions | Get a list of transactions by start_version and limit
[**getLatestVersion**](transaction_api.md#getLatestVersion ) | **GET** /v1/transactions/latest_version | Get the latest version number of transactions in libra blockchain
[**getTransactionLatest**](transaction_api.md#getTransactionLatest ) | **GET** /v1/transactions/latest | Get a list of latest transactions, return <limit> number transactions
[**getByAccountSeq**](transaction_api.md#getByAccountSeq ) | **GET** /v1/transactions/acc_seq | Get transaction by account_address and account sequence_number
[**waitTransaction**](transaction_api.md#waitTransaction ) | **GET** /v1/transactions/wait_for_transaction | Wait transaction finish it's execution on blockchain
[**mint**](transaction_api.md#mint ) | **POST** /v1/transactions/mint | Mint micro-libra coins to an account.
[**mintMol**](transaction_api.md#mintMol ) | **POST** /v1/transactions/mint_mol | Mol supported mint service to mint micro-libra coins to an account.
[**createAccount**](transaction_api.md#createAccount ) | **POST** /v1/transactions/create_account | Create account on the blockchain.
[**p2pTransfer**](transaction_api.md#p2pTransfer ) | **POST** /v1/transactions/transfer | Transfer micro-libra coins from sender account to receiver_account_address.



<br/><hr/>

## > `getTransaction`

Get a transaction by version id

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.getTransaction(version);
    console.log(data) //SignedTransactionWithInfo
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **version** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `getTransactions`

Get a list of transactions by start_version and limit

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.getTransactions(start_version, limit);
    console.log(data) //List of SignedTransactionWithInfo
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **start_version** | **number**|  
 **limit** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `getLatestVersion`

Get the latest version number of transactions in libra blockchain

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.getLatestVersion();
    console.log(data) //Latest Version
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
  |   |  

### Return type

[**LatestVersionResult**](../LatestVersionResult.md)


<br/><hr/>

## > `getTransactionLatest`

Get a list of latest transactions, return <limit> number transactions

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.getTransactionLatest(limit);
    console.log(data) //List of SignedTransactionWithInfo
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **limit** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `getByAccountSeq`

Get transaction by account_address and account sequence_number

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.getByAccountSeq(account_address, sequence_number);
    console.log(data) //SignedTransactionWithInfo
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **account_address** | **string**|  
 **sequence_number** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `waitTransaction`

Wait transaction finish it's execution on blockchain

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.waitTransaction(account_address, sequence_number);
    console.log(data) //SignedTransactionWithInfo
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **account_address** | **string**|  
 **sequence_number** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `mint`

Mint micro-libra coins to an account.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.mint(receiver_account_address, number_of_micro_libra, force_offical);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **receiver_account_address** | **string**|  
 **number_of_micro_libra** | **number**|  
 **force_offical** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `mintMol`

Mol supported mint service to mint micro-libra coins to an account.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.mintMol(receiver_account_address, number_of_micro_libra);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **receiver_account_address** | **string**|  
 **number_of_micro_libra** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `createAccount`

Create account on the blockchain.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.createAccount(account_address);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **account_address** | **string**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)


<br/><hr/>

## > `p2pTransfer`

Transfer micro-libra coins from sender account to receiver_account_address.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.TransactionAPI.p2pTransfer(wallet_id, sender_account_address, receiver_account_address, number_of_micro_libra);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **wallet_id** | **number**|  
 **sender_account_address** | **string**|  
 **receiver_account_address** | **string**|  
 **number_of_micro_libra** | **number**|  
  |   |  

### Return type

[**SignedTransactionWithInfo**](../SignedTransactionWithInfo.md)

