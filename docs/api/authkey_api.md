## AuthkeyAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**postClientKey**](authkey_api.md#postClientKey ) | **POST** /v1/authkey/clients | Create a new client api key
[**getClientKeys**](authkey_api.md#getClientKeys ) | **GET** /v1/authkey/clients | Get all activate client api key
[**debugKey**](authkey_api.md#debugKey ) | **GET** /v1/authkey/debug | Debug auth key. get it's appid , type , issue_time and expire_time etc.



<br/><hr/>

## > `postClientKey`

Create a new client api key

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AuthkeyAPI.postClientKey(valid_hours);
    console.log(data) //Client API key
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **valid_hours** | **number**|  
  |   |  

### Return type

[**AuthKey**](../AuthKey.md)


<br/><hr/>

## > `getClientKeys`

Get all activate client api key

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AuthkeyAPI.getClientKeys();
    console.log(data) //List of Client API Keys
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
  |   |  

### Return type

[**AuthKey**](../AuthKey.md)


<br/><hr/>

## > `debugKey`

Debug auth key. get it's appid , type , issue_time and expire_time etc.

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.AuthkeyAPI.debugKey();
    console.log(data) //Debug API Key
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
  |   |  

### Return type

[**AuthKey**](../AuthKey.md)

