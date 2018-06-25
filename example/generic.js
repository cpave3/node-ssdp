const {Client} = require('../lib');
const client = new Client(); // Use default ssdp values

client.on('message', data => {
    console.log(data.toString());
});

client.bind();