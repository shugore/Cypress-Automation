Cypress.Commands.add("launchUrl", () => {

  cy.visit("/");

});

Cypress.Commands.add("scrollToElement", (locator) => {

  cy.get(locator).scrollIntoView();
  
});
