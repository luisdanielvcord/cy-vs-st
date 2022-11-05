/// <reference types="cypress" />

import data from '../../api_data.json'

describe('test suite', () => {

    var reqToken
    var sessionId

    before('auth', () => {
        cy.request('https://api.themoviedb.org/3/authentication/token/new?api_key=' + data.key).then((resp) => {
            expect(resp.status).to.eq(200)
            reqToken = resp.body["request_token"]

            cy.request({
                method: 'POST',
                url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=' + data.key,
                body: {
                    "username": data.username,
                    "password": data.password,
                    "request_token": reqToken
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
            })

            cy.request({
                method: 'POST',
                url: 'https://api.themoviedb.org/3/authentication/session/new?api_key=' + data.key,
                body: {
                    "username": data.username,
                    "password": data.password,
                    "request_token": reqToken
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                sessionId = resp.body["session_id"]
            })
        })
    })

    it('create and delete rating', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.themoviedb.org/3/movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId,
            body: {
                "value": 8.0
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201)
        })

        cy.request('DELETE', 'https://api.themoviedb.org/3/movie/12335/rating?api_key=' + data.key + '&session_id=' + sessionId,
        ).then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })
})
