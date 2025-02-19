export class addDeletePage {
  weblocators = {
    scrollToPage: '[href="/add-remove-elements"].my-link',
    addDelete: '[href="/add-remove-elements"].my-link',
    addElement: ".btn.btn-primary.mt-3",
    deleteElement: '[onclick="deleteElement()"]',
  };
  scrollPage() {
    cy.wait(5000);
    cy.scrollToElement(this.weblocators.scrollToPage);
  }

  clickOnaddDelete() {
    cy.get(this.weblocators.addDelete).should("be.visible").click();
  }

  clickAddElement() {
    cy.wait(5000);
    cy.document().then((doc) => {
      const deleteAvailable =
        Cypress.$("[onclick='deleteElement()']", doc).length > 0;

      if (deleteAvailable) {
        cy.get(this.weblocators.deleteElement).should("be.visible").click();
      } else {
        
        cy.get(this.weblocators.addElement).should("be.visible").click();
        cy.get(this.weblocators.deleteElement).should("be.visible").click();
      }
    });
  }
}
