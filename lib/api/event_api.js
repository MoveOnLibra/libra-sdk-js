const BaseAPI = require('../base_api');
module.exports = class EventAPI extends BaseAPI {
    /** Get events sent from this account by address
     * @param { string } address
     * @param { number } start_event_seq_number
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEventsSent(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "number", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get events received from this account by address
     * @param { string } address
     * @param { number } start_event_seq_number
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEventsReceived(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "number", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get latest events sent from this account by address
     * @param { string } address
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEventsLatestSent(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/latest/sent/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get latest events received from this account by address
     * @param { string } address
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEventsLatestReceived(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/latest/received/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get events both sent and received of this account by address
     * @param { string } address
     * @param { number } start_event_seq_number
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEvents(address, start_event_seq_number, limit){
        address = this.checkParam(address, "address", "string", true);
        start_event_seq_number = this.checkParam(start_event_seq_number, "start_event_seq_number", "number", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["start_event_seq_number"] = start_event_seq_number;
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
    /** Get latest events both sent and received of this account by address
     * @param { string } address
     * @param { number } limit
     * @return { List of Events } json object of 'List of Events'
     */
    async getAccountEventsLatest(address, limit){
        address = this.checkParam(address, "address", "string", true);
        limit = this.checkParam(limit, "limit", "number", false);
        let url = "/v1/events/latest/{address}";
        url = url.replace("{address}", address);
        let data = {};
        data["limit"] = limit;
        return await this.client.call_api(url, data);
    };
}
