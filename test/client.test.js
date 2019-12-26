//import { LibraClient } from '../lib/index.mjs';
const LibraClient = require('../lib/index.js');
const assert = require('assert');

describe('#debugKey()', function() {
  this.timeout(30000);
  it('respond with matching records', async function() {
    const appkey = "eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoidHgxeHl4MXh1IiwiaWF0IjoxNTcyOTI0NzQxLCJleHAiOjE2MDQ0NjA3NDF9.2yh_gbH266nWHQ9E_fghs7vVoFHT7a1Z6Zi-NEYt7VTmzK8GPG7BzrBkJ3HATCoVFawss_tLMqqHRUtsGVkJSQ";
    var client = new LibraClient("testnet", appkey);
    //console.log(client);
    assert.equal(2.0, 2);
    data = await client.authkeyAPI.debugKey();
    assert.equal(data.token, appkey);
    assert.equal(data.network, "testnet");
    console.log(data);
    return data;
  });
});

describe('#get_balance()', function() {
  this.timeout(15000);
  it('respond with matching records', async function() {
    var client = new LibraClient("testnet");
    address = "000000000000000000000000000000000000000000000000000000000a550c18"
    data = await client.addressAPI.getAccountBalance(address);
    assert(data.balance > 0)
    data2 = await client.addressAPI.getAccountBalance({"address":address});
    assert.deepEqual(data, data2)
    console.log(data)
    return data;
  });
});

describe('#get_transactions()', function() {
  this.timeout(15000);
  it('omit optional param limit and get default number of txs which is 1', async function() {
    var client = new LibraClient("testnet");
    data = await client.transactionAPI.getTransactions(2);
    //params passed to axios: { start_version: 2, limit: undefined }
    assert(data.length == 1)
    console.log(data);
    return data;
  });
});
