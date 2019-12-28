## MoveAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**compileModule**](move_api.md#compileModule ) | **POST** /v1/move/compile/module | Compile move module of the given source file
[**compileScript**](move_api.md#compileScript ) | **POST** /v1/move/compile/script | Compile move script of the given source file
[**getCode**](move_api.md#getCode ) | **GET** /v1/move/download/{code_id} | Download compiled move bytecode by id
[**publish**](move_api.md#publish ) | **POST** /v1/move/publish | Publish move module on-chain
[**execute**](move_api.md#execute ) | **POST** /v1/move/execute | Execute custom move script on-chain



<br/><hr/>

## > `compileModule`

Compile move module of the given source file

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.MoveAPI.compileModule(publish_account_address, source_file);
    console.log(data) //the compiled bytecode id
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **publish_account_address** | **string**|  
 **source_file** | **file**|  
  |   |  

### Return type

[**CodeIdResult**](../CodeIdResult.md)


<br/><hr/>

## > `compileScript`

Compile move script of the given source file

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.MoveAPI.compileScript(sender_address, source_file);
    console.log(data) //the compiled bytecode id
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **sender_address** | **string**|  
 **source_file** | **file**|  
  |   |  

### Return type

[**CodeIdResult**](../CodeIdResult.md)


<br/><hr/>

## > `getCode`

Download compiled move bytecode by id

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.MoveAPI.getCode(code_id);
    console.log(data) //the compiled bytecode id
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **code_id** | **string**|  
  |   |  

### Return type

[**array**](../array.md)


<br/><hr/>

## > `publish`

Publish move module on-chain

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.MoveAPI.publish(code_id, publish_account_address);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **code_id** | **string**|  
 **publish_account_address** | **string**|  
  |   |  

### Return type

[**SignedTransaction**](../SignedTransaction.md)


<br/><hr/>

## > `execute`

Execute custom move script on-chain

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.MoveAPI.execute(code_id, sender_account_address, script_args);
    console.log(data) //SignedTransaction
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **code_id** | **string**|  
 **sender_account_address** | **string**|  
 **script_args** | **array**|  
  |   |  

### Return type

[**SignedTransaction**](../SignedTransaction.md)

