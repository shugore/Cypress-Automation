export class loginPage {


    weblocators = {

        testLogin: '[href="/login"].my-link',
        username: '#username',
        password: '#password',
        login: '[type="submit"]',
       
    }

    clickOntestLogin() {

        cy.get(this.weblocators.testLogin).should('be.visible').click()
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