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