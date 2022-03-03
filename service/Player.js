//import
const AxiosClient = require('../resources/AxiosClient');

//service
class Player {
    constructor(data) {
        this.AxiosData = data.AxiosData;
        this.AxiosClient = new AxiosClient(this.AxiosData);
        this.Region = data.Region;
    }

    /**
    */
    async GetUserInfo() {
        const response = await this.AxiosClient.post(`https://auth.riotgames.com/userinfo`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async FetchPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/mmr/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetUsername(puuid) {
        const response = await this.AxiosClient.put(this.Region.url.playerData + `/name-service/v2/players`, [
            `${puuid}`
        ]);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    * @param {string} queueId QueueID
    * @param {number} startIndex startIndex
    * @param {number} endIndex endIndex
    */
    async FetchCompetitiveUpdates(puuid, queueId = null, startIndex = 0, endIndex = 10) {
        let _url = this.Region.url.playerData + `/mmr/v1/players/${puuid}/competitiveupdates?startIndex=${startIndex}&endIndex=${endIndex}`;
        if (queueId != null) {
            _url += `&queue=${queueId}`
        }

        const response = await this.AxiosClient.get(_url);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async Loadout(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/personalization/v2/players/${puuid}/playerloadout`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
    async AccountXP(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/account-xp/v1/players/${puuid}`);

        return response.data;
    }
}

module.exports = Player;