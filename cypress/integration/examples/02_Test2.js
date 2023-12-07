/// <reference types="Cypress" />

describe('My Second Test', () => {
  it('Verify Item in Cart', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get("[type='search']").type('ca')
    cy.wait(1000)
    // Parent Chaild chaining
    cy.get('.products').as('productLocator')
   
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
       cy.wrap($el)
       
        .find('button').click()
      }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.xpath("//button[contains(text(),'Place Order')]").click()



  })
})

