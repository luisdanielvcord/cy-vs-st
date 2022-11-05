const request = require('supertest')
const expect = require('chai').expect
const data = require('./api_data.json')

describe("test suite", () => {

    var reqToken
    var sessionId
    var test

    before('auth', () => {

        request('https://api.themoviedb.org/3/')
            .get('authentication/token/new?api_key=' + data.key)
            .end((err, res) => {
                reqToken = res.body.request_token
                expect(res.statusCode).to.be.equal(200)

                request('https://api.themoviedb.org/3/')
                    .post('authentication/token/validate_with_login?api_key=' + data.key)
                    .send({
                        "username": data.username,
                        "password": data.password,
                        "request_token": reqToken
                    })
                    .end((err, res) => {
                        expect(res.statusCode).to.be.equal(200)

                        request('https://api.themoviedb.org/3/')
                            .post('authentication/session/new?api_key=' + data.key)
                            .send({
                                "username": data.username,
                                "password": data.password,
                                "request_token": reqToken
                            })
                            .end((err, res) => {
                                sessionId = res.body.session_id
                                expect(res.statusCode).to.be.equal(200)

                                request('https://api.themoviedb.org/3/')
                                    .post('movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId)
                                    .send({
                                        "value": 8.0
                                    })
                                    .end((err, res) => {
                                        expect(res.statusCode).to.be.equal(201)
                                    })

                                request('https://api.themoviedb.org/3/')
                                    .delete('movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId)
                                    .end((err, res) => {
                                        expect(res.statusCode).to.be.equal(200)
                                    })
                            })
                    })
            })
    })

    it('create and delete rating', () => {
        console.log(test)
        console.log(sessionId)
        console.log(reqToken)

    })
})
