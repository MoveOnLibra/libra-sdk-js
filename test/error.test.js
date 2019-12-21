//import { LibraClient } from '../lib/index.mjs';
const LibraClient = require('../lib/index.js');
const assert = require('assert');

describe('#check_param()', function () {
    it('should raise error without network', function () {
        assert.throws(
            () => {
                client = new LibraClient();
            },
            Error
        );
    });
});


describe('get balance should have address param', function () {
    it('promise rejection', async function () {
        var client = new LibraClient("testnet");
        assert.rejects(
            async () => {
                await client.addressAPI.getAccountBalance();
            },
            {
                name: 'Error',
                message: "Missing the required parameter: address"
            }
        );
    });
});