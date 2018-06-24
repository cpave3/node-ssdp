const {Client} = require('./lib');
const client = new Client({port: 1982, service: 'wifi_bulb'});

client.on('message', data => {
    console.log(data.toString());
});

client.bind();


// This example will search for all Xiaomi Yeelights on the network
