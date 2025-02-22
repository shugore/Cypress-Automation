export class webInputsPage {


    weblocators = {

        webInputs: '[href="/inputs"].my-link',
        inputNumber: '#input-number.input-box',
        inputText: '#input-text.input-box',
        inputPassword: '#input-password.input-box',
        inputDate: '#input-date.input-box',
       
    }

    scrollToPage(){

        cy.scrollToElement(this.weblocators.inputNumber)
    }

    clickOnWebInputs() {

        cy.get(this.weblocators.webInputs).should('be.visible').click()
    }

    enterInputNumber(inputNumber) {

        cy.get(this.weblocators.inputNumber).should('be.visible').type(inputNumber)
    }

    enterInputText(inputText) {

        cy.get(this.weblocators.inputText).should('be.visible').type(inputText)
    }

    enterInputPassword(inputPassword) {

        cy.get(this.weblocators.inputPassword).should('be.visible').type(inputPassword)
    }
    
   

}