module.exports = class EventAPI {
    constructor(client) {
        this.client = client;
        this.checkParam = function(param, param_name){
            if (param === undefined || param === null) {
                throw new Error("Missing the required parameter: "+param_name);
            }
        }
    }
    async getAccountEventsSent(start_event_seq_number, limit, address){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsReceived(start_event_seq_number, limit, address){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestSent(limit, address){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestReceived(limit, address){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEvents(start_event_seq_number, limit, address){
        this.checkParam(start_event_seq_number, "start_event_seq_number");
        this.checkParam(address, "address");
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatest(limit, address){
        this.checkParam(address, "address");
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
}
