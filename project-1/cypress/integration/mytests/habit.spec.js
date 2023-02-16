/// <reference types="cypress" />

describe('habits dashboard', () => {
  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should display a modal when add button is clicked', () => {
    cy.contains('button', 'add', { matchCase: false }).click()
    cy.contains('add a new habit', { matchCase: false }).should('be.visible')
  })

  it('should display a habit when a new one is added', () => {
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type('New habit yooo')
    cy.contains('save changes', { matchCase: false }).click()
    cy.contains('new habit yooo', { matchCase: false })
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container')
  })

  it('should toggle icon when habit is clicked', () => {
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type('New habit yooo')
    cy.contains('save changes', { matchCase: false }).click()
    cy.contains('New habit yooo', { matchCase: false })
    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible')
    cy.contains('New habit yooo', { matchCase: false }).click()
    cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible')
  })
})
