/// <reference types="Cypress" />

describe('My Forth Test', () => {
  it('Verify Alert', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#alertbtn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    cy.wait(5000)
    
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.origin('www.qaclickacademy.com', () => {

      cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
    })


  })
})

