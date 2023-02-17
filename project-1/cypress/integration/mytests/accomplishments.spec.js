/// <reference types="cypress" />

describe('accomplishments dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should display an error if an information is missing', () => {
    // Type in title
    cy.get('[data-cy="accomplishment-title-input"]').type('New accomplishment')
    
    // Type in description
    cy.get('[data-cy="accomplishment-input"]').type('Yo yo yo')
    
    // Click submit
    cy.contains('submit', { matchCase: false }).click()
    
    // An element containing complete, to, and continue words should be visible
    cy.contains(/^(?=.*\bcomplete\b)(?=.*\bto\b)(?=.*\bcontinue\b).*$/i).should('be.visible')
  })

  it('should display validation component if all information is provided', () => {
    // Type in title
    cy.get('[data-cy="accomplishment-title-input"]').type('New accomplishment')
    
    // Type in description
    cy.get('[data-cy="accomplishment-input"]').type('Yo yo yo')

    // Check the checkbox
    cy.get('[type="checkbox"]').click()
    
    // Click submit
    cy.contains('submit', { matchCase: false }).click()

    // Validation component should be visible
    cy.contains(/^(?=.*\bsuccessfully\b)(?=.*\bsubmitted\b).*$/i).should('be.visible')
  })
})
