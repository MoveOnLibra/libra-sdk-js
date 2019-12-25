const BaseAPI = require('../base_api');
module.exports = class EventAPI extends BaseAPI {
    async getAccountEventsSent(address, start_event_seq_number, limit){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsReceived(address, start_event_seq_number, limit){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestSent(address, limit){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestReceived(address, limit){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEvents(address, start_event_seq_number, limit){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatest(address, limit){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
}
