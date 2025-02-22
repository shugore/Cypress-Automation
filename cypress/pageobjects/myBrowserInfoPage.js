export class myBrowserInfoPage {


    weblocators = {

        browserInfo: '[href="/my-browser"].my-link',
        showBrowserInfo: '#browser-toggle.btn.btn-outline-primary.mt-2.mb-3',
        verifyInfo: '.table.table-bordered>tbody>tr>td>b',
        logIn: '[value="Log In"]',
       
    }

    scrollPage(){

        cy.scrollToElement(this.weblocators.browserInfo)
    }

    clickOnbrowserInfo() {

        cy.get(this.weblocators.browserInfo).should('be.visible').click()
    }
    clickOnShowbrowserInfo() {

        cy.get(this.weblocators.showBrowserInfo).should('be.visible').click()
    }
    
    verifyInfo() {
        
        cy.wait(5000)
        cy.get(this.weblocators.verifyInfo).should('be.visible').eq(0).scrollToElement()
        .should('have.text','User Agent');

    }

    verifyInfo2() {
        cy.wait(5000)
        cy.get(this.weblocators.verifyInfo).should('be.visible').eq(1).scrollToElement()
        .should('have.text','CodeName');

    }

}