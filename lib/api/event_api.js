const BaseAPI = require('../base_api');
module.exports = class EventAPI extends BaseAPI {
    async getAccountEventsSent(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "integer", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsReceived(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "integer", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestSent(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestReceived(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEvents(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "integer", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatest(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "integer", false);
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
}
