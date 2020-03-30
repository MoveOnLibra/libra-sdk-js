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
    it('start_version should be integer', async function () {
        var client = new LibraClient("testnet");
        assert.rejects(
            async () => {
                await client.transactionAPI.getTransactions("x");
            },
            {
                name: 'Error',
                message: "start_version's type should be integer, but real type is string"
            }
        );
    });
    it('NaN is not integer', async function () {
        var client = new LibraClient("testnet");
        assert.rejects(
            async () => {
                await client.transactionAPI.getTransactions(NaN);
            },
            {
                name: 'Error',
                message: "start_version's type should be integer, but real type is number"
            }
        );
    });
    it('limit should be integer', async function () {
        var client = new LibraClient("testnet");
        assert.rejects(
            async () => {
                await client.transactionAPI.getTransactions(1, "x");
            },
            {
                name: 'Error',
                message: "limit's type should be integer, but real type is string"
            }
        );
    });
    it('mint should have receiver_account_address', async function () {
        var client = new LibraClient("testnet");
        account = {"address": ""}
        assert.rejects(
            async () => {
                return await client.transactionAPI.mintMol(account, 1);
            },
            {
                name: 'Error',
                message: '{"address":""} does not have requried param: receiver_account_address'
            }
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
    it('test 400 response', async function () {
        this.timeout(30000);
        var client = new LibraClient("testnet", null, null);
        client.apiClient.config.baseURL = "http://47.254.29.109/api";
        try{
            ret = await client.addressAPI.getAccountBalance("bad address");
            assert.fail("not reachable.");
        }catch(error){
            assert.equal("400: address should be length 32 hex string, real len:11", client.parseError(error));
        }
        
    });
});
