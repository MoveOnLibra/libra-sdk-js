## LibraAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVmErrorCodes**](libra_api.md#getVmErrorCodes ) | **GET** /v1/libra/vm_errors | Get all error codes and explanations of vm errors when execute transactions
[**getVmErrorCode**](libra_api.md#getVmErrorCode ) | **GET** /v1/libra/vm_errors/{code} | Get error explanation for a vm error by code



<br/><hr/>

## > `getVmErrorCodes`

Get all error codes and explanations of vm errors when execute transactions

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.LibraAPI.getVmErrorCodes();
    console.log(data) ///v1/libra/vm_errors
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
  |   |  

### Return type

[**object**](../object.md)


<br/><hr/>

## > `getVmErrorCode`

Get error explanation for a vm error by code

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.LibraAPI.getVmErrorCode(code);
    console.log(data) ///v1/libra/vm_errors/{code}
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **code** | **number**|  
  |   |  

### Return type

[**object**](../object.md)

