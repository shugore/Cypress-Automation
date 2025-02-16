import { webInputsPage } from "../../pageobjects/webInputsPage"

const webInputsPageObj = new webInputsPage()

import testData from '../../fixtures/testData.json'

describe('Test Automation - Customer Login', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        webInputsPageObj.clickOnWebInputs()

        cy.scrollToBottom()

        webInputsPageObj.enterInputNumber(testData.password)

        webInputsPageObj.enterInputText(testData.password)

        webInputsPageObj.enterInputPassword(testData.password)

        //cy.url().should('include', '/overview.htm'); 

        //cy.get('.caption').should('contain', 'Experience the difference');



    })
})