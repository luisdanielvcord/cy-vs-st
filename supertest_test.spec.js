const request = require('supertest');

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

    it('supertest 3', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('machine/1')
            .expect(200, done);
    })

    it('supertest 4', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('move/1')
            .expect(200, done);
    })

    it('supertest 5', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('ability/1')
            .expect(200, done);
    })

    it('supertest 6', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('pokemon-species/1')
            .expect(200, done);
    })

    it('supertest 7', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('gender/1')
            .expect(200, done);
    })

    it('supertest 8', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('pokemon/1')
            .expect(200, done);
    })

    it('supertest 9', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('characteristic/1')
            .expect(200, done);
    })

    it('supertest 10', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('nature/1')
            .expect(200, done);
    })

    it('supertest 11', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('egg-group/1')
            .expect(200, done);
    })

    it('supertest 12', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('growth-rate/1')
            .expect(200, done);
    })

    it('supertest 13', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('pokemon-color/1')
            .expect(200, done);
    })

    it('supertest 14', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('pokemon-colors/1')
            .expect(404, done);
    })

    it('supertest 15', (done) => {
        request('https://pokeapi.co/api/v2/')
            .get('pokemon-colohrs/1')
            .expect(404, done);
    })
})

