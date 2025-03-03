export class myBrowserInfoPage {
  weblocators = {
    browserInfo: '[href="/my-browser"].my-link',
    showBrowserInfo: "#browser-toggle.btn.btn-outline-primary.mt-2.mb-3",
    verifyInfo: ".table.table-bordered>tbody>tr>td>b",
    logIn: '[value="Log In"]',
  };

  scrollPage() {
    cy.scrollToElement(this.weblocators.browserInfo);
  }

  clickOnbrowserInfo() {
    cy.get(this.weblocators.browserInfo).should("be.visible").click();
  }
  clickOnShowbrowserInfo() {
    cy.get(this.weblocators.showBrowserInfo).should("be.visible").click();
  }

  verifyInfo() {
    cy.wait(5000);
    cy.document().then((doc) => {
      const hideBrowserHistryAvailable =
        Cypress.$(".table.table-bordered>tbody>tr>td>b", doc).length > 0;

      if (hideBrowserHistryAvailable) {
        cy.wait(5000);
        cy.get(this.weblocators.verifyInfo)
          .eq(0)
          .scrollToElement()
          .should("be.visible")
          .should("have.text", "User Agent");

        cy.get(this.weblocators.verifyInfo)
          .eq(1)
          .should("be.visible")
          .should("have.text", "CodeName");
      }
    });
  }
}
