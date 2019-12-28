## EventAPI

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountEventsSent**](event_api.md#getAccountEventsSent ) | **GET** /v1/events/sent/{address} | Get events sent from this account by address
[**getAccountEventsReceived**](event_api.md#getAccountEventsReceived ) | **GET** /v1/events/received/{address} | Get events received from this account by address
[**getAccountEventsLatestSent**](event_api.md#getAccountEventsLatestSent ) | **GET** /v1/events/latest/sent/{address} | Get latest events sent from this account by address
[**getAccountEventsLatestReceived**](event_api.md#getAccountEventsLatestReceived ) | **GET** /v1/events/latest/received/{address} | Get latest events received from this account by address
[**getAccountEvents**](event_api.md#getAccountEvents ) | **GET** /v1/events/{address} | Get events both sent and received of this account by address
[**getAccountEventsLatest**](event_api.md#getAccountEventsLatest ) | **GET** /v1/events/latest/{address} | Get latest events both sent and received of this account by address



<br/><hr/>

## > `getAccountEventsSent`

Get events sent from this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEventsSent(address, start_event_seq_number, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **start_event_seq_number** | **number**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)


<br/><hr/>

## > `getAccountEventsReceived`

Get events received from this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEventsReceived(address, start_event_seq_number, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **start_event_seq_number** | **number**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)


<br/><hr/>

## > `getAccountEventsLatestSent`

Get latest events sent from this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEventsLatestSent(address, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)


<br/><hr/>

## > `getAccountEventsLatestReceived`

Get latest events received from this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEventsLatestReceived(address, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)


<br/><hr/>

## > `getAccountEvents`

Get events both sent and received of this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEvents(address, start_event_seq_number, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **start_event_seq_number** | **number**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)


<br/><hr/>

## > `getAccountEventsLatest`

Get latest events both sent and received of this account by address

### Example

```javascript
const appkey = "*****" // your app key
var client = new LibraClient("testnet", appkey);
try{
    data = await client.EventAPI.getAccountEventsLatest(address, limit);
    console.log(data) //List of Events
} catch (error) {
    console.log(error);
}
```

### Parameters

Name | Type | Description 
------------- | ------------- | -------------
 **address** | **string**|  
 **limit** | **number**|  
  |   |  

### Return type

[**ContractEvent**](../ContractEvent.md)

