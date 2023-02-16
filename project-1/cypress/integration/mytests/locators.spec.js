/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('locating elements with get', () => {
    // Get all elements by tag name
    cy.get('button')

    // Get all elements by class name
    cy.get('.btn-with-class')

    // Get all elements with specific classes
    cy.get('.Elements-btn.btn-with-class.more-btn-classes')
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]')

    // Get all elements by id
    cy.get('[id="btn-with-id"]')
    
    // Get all elements by attribute
    cy.get('[type="submit"]')

    // Get all elements by tag and class name
    cy.get('button.btn-with-class')

    // Get all elements by tag, class and attribute
    cy.get('button.Elements-btn[type="submit"]')

    // Get all elements with specfic data attribute
    cy.get('[data-cy="btn-id-1"]')

    // Get all elements with specfic data attribute using custom command defined in cypress/support/commands.js
    cy.getByTestId('btn-id-1')
  })
})
