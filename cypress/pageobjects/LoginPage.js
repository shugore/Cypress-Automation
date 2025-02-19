export class loginPage {


    weblocators = {
        
        scrollPage: '[for="username"].form-label',
        testLogin: '[href="/login"].my-link',
        username: '#username',
        password: '#password',
        login: '[type="submit"]',
       
    }

    clickOntestLogin() {

        cy.get(this.weblocators.testLogin).should('be.visible').click()
    }

    scrollToUsername() {

        cy.scrollToElement(this.weblocators.scrollPage).should('be.visible')
    }

    enterUsername(username) {

        cy.get(this.weblocators.username).should('be.visible').type(username)
    }

    enterPassword(password) {

        cy.get(this.weblocators.password).should('be.visible').type(password)
    }

    clickOnlogin() {

        cy.get(this.weblocators.login).should('be.visible').click()
    }
    
   

}