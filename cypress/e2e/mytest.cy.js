/// <reference types="cypress"/>

it("EMSTest", () => {
    cy.visit("http://localhost:8089/ExpenseApp-1/login.jsp")
    cy.wait(3000)
    cy.title().should("equal", "Login page")
  })