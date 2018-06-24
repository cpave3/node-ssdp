'use strict';

const chai   = require('chai')
    , expect = chai.expect
    , assert = chai.asert;

const { Client } = require('../lib');

describe('Client', () => {
    it('Should have a config when not passed any constructor value', () => {
        const client = new Client();
        
        expect(client.config).to.be.an('object');
        expect(client.config).to.not.be.null;
        expect(client.config).to.not.be.undefined;
    });

    it('Should fill the rest of the default config when given an incomplete object', () => {
        const partialConfig = {
            port: 1982
        };
        const client = new Client(partialConfig);

        expect(client.config).to.be.an('object');
        expect(client.config).to.not.be.null;
        expect(client.config).to.not.be.undefined;
        expect(client.config.port).to.equal(1982);
        expect(client.config.ip).to.not.be.undefined;
        expect(client.config.ip).to.not.be.null;
    });
});
