## WalletAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWallet**](wallet_api.md#createWallet ) | **POST** /v1/wallets | Create a wallet belongs to the app authorized by auth key
[**getWallets**](wallet_api.md#getWallets ) | **GET** /v1/wallets | Get all wallets managed by the app authorized by auth key
[**getWallet**](wallet_api.md#getWallet ) | **GET** /v1/wallets/{wallet_id} | Get a wallet by id which should belongs to authorized app
[**backupWallet**](wallet_api.md#backupWallet ) | **GET** /v1/wallets/backup/{wallet_id} | Backup a wallet by id which should belongs to authorized app
[**createWalletAccount**](wallet_api.md#createWalletAccount ) | **POST** /v1/wallets/{wallet_id}/accounts | Create an account in wallet
[**getWalletAccounts**](wallet_api.md#getWalletAccounts ) | **GET** /v1/wallets/{wallet_id}/accounts | Get all accounts of a wallet



<br/><hr/>

## > `createWallet`

Create a wallet belongs to the app authorized by auth key

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.createWallet(name);
    console.log(data) //Wallet
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **name** | **string**|  
  |   |  

### Return type

[**Wallet**](../Wallet.md)


<br/><hr/>

## > `getWallets`

Get all wallets managed by the app authorized by auth key

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.getWallets();
    console.log(data) //List of Wallets
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
  |   |  

### Return type

[**Wallet**](../Wallet.md)


<br/><hr/>

## > `getWallet`

Get a wallet by id which should belongs to authorized app

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.getWallet(wallet_id);
    console.log(data) //Wallet
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **wallet_id** | **number**|  
  |   |  

### Return type

[**Wallet**](../Wallet.md)


<br/><hr/>

## > `backupWallet`

Backup a wallet by id which should belongs to authorized app

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.backupWallet(wallet_id);
    console.log(data) //Wallet
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **wallet_id** | **number**|  
  |   |  

### Return type

[**Wallet**](../Wallet.md)


<br/><hr/>

## > `createWalletAccount`

Create an account in wallet

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.createWalletAccount(wallet_id);
    console.log(data) //List of Account
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **wallet_id** | **number**|  
  |   |  

### Return type

[**Account**](../Account.md)


<br/><hr/>

## > `getWalletAccounts`

Get all accounts of a wallet

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.WalletAPI.getWalletAccounts(wallet_id);
    console.log(data) //Account
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **wallet_id** | **number**|  
  |   |  

### Return type

[**Account**](../Account.md)

