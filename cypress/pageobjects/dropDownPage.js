export class dropDownPage {
  weblocators = {
    scrollToPage: '[href="/dropdown"].my-link',
    dropDownList: '[href="/dropdown"].my-link',
    simpleDropDown: "select#dropdown",
    countrySelection: 'select#country',
  };

  scrollPage() {

    cy.scrollToElement(this.weblocators.scrollToPage);
  }

  clickOnDropDown() {

    cy.get(this.weblocators.dropDownList).should("be.visible").click();
  }

  clicksimpleDropDown(option) {

    cy.get(this.weblocators.simpleDropDown).select(option).should("be.visible")
   
}

clickCountry(country) {

  cy.get(this.weblocators.countrySelection).select(country).should("be.visible")
 
}
}
