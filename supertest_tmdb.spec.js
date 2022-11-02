const request = require('supertest');

import data from './api_data.json'

describe("test suite", () => {

    var reqToken
    var sessionId

    before('auth', (done) => {
        request('https://api.themoviedb.org/3/')
            .get('authentication/token/new?api_key=' + data.key)
            .then(resp => {
                reqToken = resp.body.request_token
            })
            .expect(200, done);
    })

    it('create and delete rating', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('location/1')
            .then(res)
            .expect(200, done);
    })
})
