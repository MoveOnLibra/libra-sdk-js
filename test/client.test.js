//import { LibraClient } from '../lib/index.mjs';
const LibraClient = require('../lib/index.js');
const assert = require('assert');

const appkey = "eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjoidHgxeHl4MXh1IiwiaWF0IjoxNTcyOTI0NzQxLCJleHAiOjE2MDQ0NjA3NDF9.2yh_gbH266nWHQ9E_fghs7vVoFHT7a1Z6Zi-NEYt7VTmzK8GPG7BzrBkJ3HATCoVFawss_tLMqqHRUtsGVkJSQ";


describe('#get_balance()', function() {
  this.timeout(15000);
  it('respond with matching records', async function() {
    var client = new LibraClient("testnet", appkey);
    console.log(client);
    assert.equal(2.0, 2);
    data = await client.getAccountBalance("000000000000000000000000000000000000000000000000000000000a550c18");
    assert(data.balance > 0)
    return data;
  });
});