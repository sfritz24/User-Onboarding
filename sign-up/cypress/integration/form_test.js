describe("test input and submit button", () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/')
    })

    it('submit button should be disabled', () =>{
        cy.get('button').should('be.disabled')
    })
})