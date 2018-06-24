const defaultConfig = {
    ip: '239.255.255.250',
    port: 1900,
    service: 'upnp:rootdevice',
    mx: 3,
    man: 'ssdp:discover',
};

class Client {
    constructor(config = defaultConfig) {
        //  We need to set the config provided by the user here.
        //  Anything that they don't provide needs to be taken from the default.
        Object.keys(defaultConfig).forEach(key => {
            if (!config[key]) {
                config[key] = defaultConfig[key];
            }
        });
        this.config = config;
    }
}

module.exports = Client;
