module.exports = {
    //client
    Auth: {
        Account: require('./auth/Account'),
        Multifactor: require('./auth/MultiFactor'),
    },
    ValClient: require('./auth/ValClient'),

    //api
    ValRegion: require('./resources/ValRegion'),
    AxiosClient: require('./resources/AxiosClient'),

    //data
    Resource: {
        QueueId: require(`./resources/data/QueueId`),
        ItemTypeId: require(`./resources/data/ItemTypeId`),
        Currency: require(`./resources/data/Currency`),
    }
}