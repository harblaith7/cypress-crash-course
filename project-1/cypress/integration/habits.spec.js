/// <reference types="cypress" />

describe('Habits Dashboard', () => {
  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should show the habits modal when add button clicked', () => {
    cy.get('.Habit-add-btn').click()
    cy.contains('Add a new habit').should('be.visible')
  })

  it('should display habit card when new habit is added', () => {
    cy.contains('button', 'Add').click()
    cy.get("input[placeholder='Habit']").type('Hello Jhon Doe')
    cy.contains('Save Changes').click()
    cy.contains('Hello Jhon Doe')
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container')
  })

  it('should toggle habit when icon card is click', () => {
    cy.contains('button', 'Add').click()
    cy.get("input[placeholder='Habit']").type('Hello Jhon Doe')
    cy.contains('Save Changes').click()
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible')
    cy.contains('Hello Jhon Doe').click()

    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible')
  })
})
