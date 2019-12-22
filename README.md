Javascript SDK for Libra Network and Move Smart Contract powered by MoveOnLibra OpenAPI.

## Introduction
The [MoveOnLibra/mol](https://www.MoveOnLibra.com) open API is used to develop [Libra](https://libra.org) applications and smart contracts, aiming to make life as a Libra developer easier. There are currently five groups of API:

* **Address**, query account info by address from the libra blockchain network
* **Transaction**, query transaction from the libra blockchain network, as well as submit transaction(mint and p2p transfer)
* **Event**, query events by address from the libra blockchain network
* **Wallet**, create and use custodial wallets managed by MoveOnLibra, one wallet can have multiple accounts and every account have a unique address on the Libra network.
* **Move**, (TODO) smart contracts development using move IR. Support compile move source code, publish module on-chain and execute custom scripts on **devnet** hosted by MoveOnLibra. 


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

```js
const LibraClient = require('libra-sdk-mol');
async function getBalance() {
    var client = new LibraClient("testnet");
    data = await client.addressAPI.getAccountBalance("000000000000000000000000000000000000000000000000000000000a550c18");
    return data.balance;
}
```

In browser:
```js
<script src="https://unpkg.com/libra-sdk-mol/dist/moveonlibra.browser.js"></script>
<script>
	var client = new LibraClient("testnet");
	async function getBalance(){
		data = await client.addressAPI.getAccountBalance("000000000000000000000000000000000000000000000000000000000a550c18");
		console.log(data);
		return data.balance;
	}
	getBalance();
</script>
```