export class forgotPasswordPage {


    weblocators = {

        forgotPassowrd: '[href="/forgot-password"].my-link',
        email: '[type="email"]',
        retrievePassword: '[type="submit"]',
        textVisible: '#confirmation-alert>p',
       
    }

    clickOnforgotPassowrd() {

        cy.get(this.weblocators.forgotPassowrd).should('be.visible').click()
    }

    scrollToElement(){

        cy.scrollToElement(this.weblocators.email)
    }

    enterEmail(email) {

        cy.get(this.weblocators.email).should('be.visible').type(email)
    }
    
    clickOnRetrievePassword() {

        cy.get(this.weblocators.retrievePassword).should('be.visible').click()
    }

    verifyText() {
        cy.wait(3000)
        cy.get(this.weblocators.textVisible).should('include.text', "An e-mail has been sent to you")
        .and('include.text', "which explains how to reset your");
    }

}