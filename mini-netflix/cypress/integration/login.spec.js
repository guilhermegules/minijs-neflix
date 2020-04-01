/// <reference types="cypress" />

context("Actions", () => {
  it("make a login", () => {
    cy.server();

    cy.route({
      method: "GET",
      url: 'http://localhost:3333/users',
      response: []
    });

    cy.visit("http://localhost:4200/login");

    cy.get(".email")
      .type("guilhermegules@gmail.com")
      .should("have.value", "guilhermegules@gmail.com");

    cy.get(".pass")
      .type("123456789")
      .should("have.value", "123456789");

    cy.get('button[type="submit"]').click();

    cy.visit("http://localhost:4200/main-page");
  });
});
