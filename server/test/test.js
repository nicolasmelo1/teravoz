const mongoose = require('mongoose');
const Call = require('../models/calls');
const User = require('../models/users');
let server = require('../app')
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);

describe('Webhook', () => {
    beforeEach((done) => {
        Call.remove({}, (err) => {
            User.remove({}, (err) => {
                done();
            });
        });
    });
    describe('/POST Webhook', () => {
        it('it should not POST a action without type field', (done) => {
            let webhook = {
                code: "123456789",
                direction: "outbound",
                their_number: "11912910000",
                timestamp: "2017-01-01T00:00:00Z"
            };
            chai.request(server)
                .post('/webhook')
                .send(webhook)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('error')
                    done();
                });
        });
        it('it should POST a correct webhook', (done) => {
            let webhook = {
                type: "call.standby",
                call_id: "1463669266.30033",
                code: "123456789",
                direction: "outbound",
                their_number: "11912910000",
                timestamp: "2017-01-01T00:00:00Z"
            };
            chai.request(server)
                .post('/webhook')
                .send(webhook)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it('it should GET active and non active calls', (done) => {
            chai.request(server)
                .get('/api/calls')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});