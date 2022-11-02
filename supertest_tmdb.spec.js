const request = require('supertest');

import data from '../../api_data.json'

describe("test suite", () => {

    it('supertest 1', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('generation/1')
            .expect(200, done);
    })

    it('supertest 2', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('location/1')
            .expect(200, done);
    })
})
