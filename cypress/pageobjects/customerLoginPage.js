export class customerLoginPage {


    weblocators = {

        userName: '[name="username"]',
        password: '[name="password"]',
        logIn: '[value="Log In"]',
       
    }

    enteruserName(userName) {

        cy.get(this.weblocators.userName).should('be.visible').type(userName)
    }
    enterPassword(password) {

        cy.get(this.weblocators.password).should('be.visible').type(password)
    }
    
    clickOnLogin() {
        cy.get(this.weblocators.logIn).should('be.visible').click()
    }

}