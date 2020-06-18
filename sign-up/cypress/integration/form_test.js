describe("test first name input and submit button", () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/')
    })

    it('submit button should be disabled', () =>{
        cy.get('button').should('be.disabled')
    })

    it('can type new first name', () =>{
        cy.get('input[name=firstName]')
        .type('Shanon')
        .should('have.value', 'Shanon')
    })

    it('sumbit button should still be disabled', ()=>{
        cy.get('button').should('be.disabled')
    })
})

describe('test last name input and submit button', ()=>{
    it('can type new last name', ()=>{
        cy.get('input[name=lastName]')
        .type('Fritz')
        .should('have.value', 'Fritz')
    })

    it('submit button should still be disabled', ()=>{
        cy.get('button').should('be.disabled')
    })
})

describe('test email input and submit button', ()=>{
    it('can type new email', ()=>{
        cy.get('input[name=email]')
        .type('shanon@fritz.com')
        .should('have.value', 'shanon@fritz.com')
    })

    it('submit button should still be disabled', ()=>{
        cy.get('button').should('be.disabled')
    })
})

describe('test password input and submit button', ()=>{
    it('can type new password', ()=>{
        cy.get('input[name=password]')
        .type('happygirl')
        .should('have.value', 'happygirl')
    })

    it('submit button should still be disabled', ()=>{
        cy.get('button').should('be.disabled')
    })
})

describe('test click checkbox and submit button', ()=>{
    it('can click checkbox', ()=>{
        cy.get('input[name=termsOfUse]')
        .click()
        .should('have.checked', 'true')
    })

    it('submit button should be enabled', ()=>{
        cy.get('button').should('be.enabled')
    })
})

describe('test submit button and clearing of form', ()=>{
    it('can click sumbit button', ()=>{
        cy.get('button').click()
    })

    it('form clears', ()=>{
        cy.get('input[name=firstName]').should('be.empty')
        cy.get('input[name=lastName]').should('be.empty')
        cy.get('input[name=email]').should('be.empty')
        cy.get('input[name=password]').should('be.empty')
        cy.get('input[name=termsOfUse]').should('have.checked')
    })
})