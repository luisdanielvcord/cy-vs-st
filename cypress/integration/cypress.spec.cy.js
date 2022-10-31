/// <reference types="cypress" />

describe('test suite', () => {
    it('test 1', () => {
        cy.request('https://pokeapi.co/api/v2/generation/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 2', () => {
        cy.request('https://pokeapi.co/api/v2/location/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 3', () => {
        cy.request('https://pokeapi.co/api/v2/machine/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 4', () => {
        cy.request('https://pokeapi.co/api/v2/move/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 5', () => {
        cy.request('https://pokeapi.co/api/v2/ability/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 6', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon-species/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 7', () => {
        cy.request('https://pokeapi.co/api/v2/gender/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 8', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 9', () => {
        cy.request('https://pokeapi.co/api/v2/characteristic/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 10', () => {
        cy.request('https://pokeapi.co/api/v2/nature/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 11', () => {
        cy.request('https://pokeapi.co/api/v2/egg-group/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 12', () => {
        cy.request('https://pokeapi.co/api/v2/growth-rate/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 13', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon-color/1').then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('test 14', () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon-colors/1',
            failOnStatusCode: false
        }).then((resp) => {
            expect(resp.status).to.eq(404)
        })
    })

    it('test 15', () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon-colohrs/1',
            failOnStatusCode: false
        }).then((resp) => {
            expect(resp.status).to.eq(404)
        })
    })
})

