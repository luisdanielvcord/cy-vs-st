const request = require('supertest')
const expect = require('chai').expect
const data = require('./api_data.json')

describe("test suite", () => {

    var reqToken
    var sessionId

    before('auth', async () => {

        await request('https://api.themoviedb.org/3/')
            .get('authentication/token/new?api_key=' + data.key)
            .expect((res) => {
                reqToken = res.body.request_token
            })
            .expect(200)

        await request('https://api.themoviedb.org/3/')
            .post('authentication/token/validate_with_login?api_key=' + data.key)
            .send({
                "username": data.username,
                "password": data.password,
                "request_token": reqToken
            })
            .expect(200)

        await request('https://api.themoviedb.org/3/')
            .post('authentication/session/new?api_key=' + data.key)
            .send({
                "username": data.username,
                "password": data.password,
                "request_token": reqToken
            })
            .expect((res) => {
                sessionId = res.body.session_id
            })
            .expect(200)
    })

    it('create and delete rating', async () => {

        await request('https://api.themoviedb.org/3/')
            .post('movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId)
            .send({
                "value": 8.0
            })
            .expect(201)

        await request('https://api.themoviedb.org/3/')
            .delete('movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId)
            .expect(200)
    })
})
