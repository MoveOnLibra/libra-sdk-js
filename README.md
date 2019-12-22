Javascript SDK for Libra Network and Move Smart Contract powered by MoveOnLibra OpenAPI.

## Introduction
The [MoveOnLibra](https://www.MoveOnLibra.com) open API is used to develop [Libra](https://libra.org) applications and smart contracts, aiming to make life as a Libra developer easier. There are currently five groups of API:

* **Address**, query account info by address from the libra blockchain network
* **Transaction**, query transaction from the libra blockchain network, as well as submit transaction(mint and p2p transfer)
* **Event**, query events by address from the libra blockchain network
* **Wallet**, create and use custodial wallets managed by MoveOnLibra, one wallet can have multiple accounts and every account have a unique address on the Libra network.
* **Move**, (TODO) smart contracts development using move IR. Support compile move source code, publish module on-chain and execute custom scripts on **devnet** hosted by MoveOnLibra. 


## Installation
To install with npm run:

```
npm install libra-sdk-mol
```

## Usage
```js
const LibraClient = require('moveonlibra');
async function getBalance() {
    var client = new LibraClient("testnet");
    data = await client.addressAPI.getAccountBalance("000000000000000000000000000000000000000000000000000000000a550c18");
    return data.balance;
}
```
