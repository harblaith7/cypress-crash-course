/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  /**
   * Get method
   * 
   * It selects all elements that match the selector.
   */
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

  /**
   * Contains method
   * 
   * It selects a single element that matches the selector (optional) and contained text.
   */
  it('locating elements with contains', () => {
    // Get an element by text
    cy.contains('Unique Text')
    cy.contains('Not Unique Text')

    // Get an element by text (case insensitive)
    cy.contains('unique text', { matchCase: false })

    // Use contains with a selector
    cy.contains('[type="submit"]', 'Not Unique Text')
    cy.contains('form', 'Not Unique Text')

    // Combine contains with get
    cy.get('[type="submit"]').contains('Not Unique Text')
  })

  /**
   * Find method
   * 
   * It selects all elements that match the selector and are descendants of the subject.
   */
  it('locating elements with find', () => {
    // From the selected element(s), find all elements with the specified selector
    cy.get('form').find('.btn-1')
    cy.get('#form-1').find('.btn-2')
  })
})
