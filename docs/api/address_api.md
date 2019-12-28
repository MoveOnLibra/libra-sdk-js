## AddressAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountState**](address_api.md#getAccountState ) | **GET** /v1/address/{address} | Get account state from address. also automatically decode account resource of this address. btw, an address can have many other resources.
[**getAccountResource**](address_api.md#getAccountResource ) | **GET** /v1/address/account_resource/{address} | Get account resource from address.
[**getAccountBalance**](address_api.md#getAccountBalance ) | **GET** /v1/address/balance/{address} | Get account balance from address
[**getAccountSequence**](address_api.md#getAccountSequence ) | **GET** /v1/address/sequence_number/{address} | Get account sequence_number from address



<br/><hr/>

## > `getAccountState`

Get account state from address. also automatically decode account resource of this address. btw, an address can have many other resources.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AddressAPI.getAccountState(address);
    console.log(data) //AccountState
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
  |   |  

### Return type

[**AccountState**](../AccountState.md)


<br/><hr/>

## > `getAccountResource`

Get account resource from address.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AddressAPI.getAccountResource(address);
    console.log(data) //AccountResource
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
  |   |  

### Return type

[**AccountResource**](../AccountResource.md)


<br/><hr/>

## > `getAccountBalance`

Get account balance from address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AddressAPI.getAccountBalance(address);
    console.log(data) //Balance
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
  |   |  

### Return type

[**BalanceResult**](../BalanceResult.md)


<br/><hr/>

## > `getAccountSequence`

Get account sequence_number from address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AddressAPI.getAccountSequence(address);
    console.log(data) //sequence_number
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
  |   |  

### Return type

[**SequenceNumberResult**](../SequenceNumberResult.md)

