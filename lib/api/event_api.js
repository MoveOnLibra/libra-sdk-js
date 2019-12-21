module.exports = class EventAPI {
    constructor(client) {
        this.client = client;
    }
    async getAccountEventsSent(address, limit, start_event_seq_number){
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsReceived(address, limit, start_event_seq_number){
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestSent(address, limit){
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatestReceived(address, limit){
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    async getAccountEvents(address, limit, start_event_seq_number){
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        data["start_event_seq_number"] = start_event_seq_number;
        return await this.client.call_api(url, data);
    };
    async getAccountEventsLatest(address, limit){
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
}
