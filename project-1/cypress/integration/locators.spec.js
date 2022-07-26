/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })
  it('locating elements with get', () => {
    // get all elements by tag name
    cy.get('button')

    // get elements by its className
    cy.get('.btn-with-class')

    // get elements with attributes
    cy.get("[class='Elements-btn btn-with-class']")
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    // get elements by id
    cy.get("[id='btn-with-id']")
    cy.get('#btn-with-id')

    // get elements by type name
    cy.get("[type='submit']")

    cy.get('button.Elements-btn')

    // get elements with specific data test id
    cy.get("[data-cy='btn-id-1']")

    cy.getByTestId('btn-id-1')
  })
})
