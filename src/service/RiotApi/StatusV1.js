//import
const { AxiosClient } = require('@ing3kth/core').Core;
const { AxiosClientOut } = require('@ing3kth/core').Interface;

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
class StatusV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/StatusV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * @returns {AxiosClientOut}
     */
    async PlatformData() {
        return await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
    }
}

//export
module.exports = StatusV1;