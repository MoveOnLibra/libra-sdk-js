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
    data = await client.addressAPI.getAccountBalance("000000000000000000000000000000000000000000000000000000000a550c18");
    assert(data.balance > 0)
    console.log(data)
    return data;
  });
});
