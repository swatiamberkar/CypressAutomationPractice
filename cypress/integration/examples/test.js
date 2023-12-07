describe('Test Suite', ()=>{
    it("Validate User", ()=>{
        cy.visit('www.saucedemo.com')
        cy.get('.login_credentials_wrap-inner #login_credentials br').invoke('text')

        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

})