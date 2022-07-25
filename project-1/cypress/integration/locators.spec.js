/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('See the locator page', () => {
    expect(true).to.equal(true)
  })
})
