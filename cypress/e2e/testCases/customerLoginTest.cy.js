import { customerLoginPage } from "../../pageobjects/customerLoginPage"

const customerLoginObj = new customerLoginPage()

import testData from '../../fixtures/testData.json'

describe('Test Automation - Customer Login', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        customerLoginObj.enteruserName(testData.userName)

        customerLoginObj.enterPassword(testData.password)

        customerLoginObj.clickOnLogin()

        cy.url().should('include', '/overview.htm'); 

        cy.get('.caption').should('contain', 'Experience the difference');



    })
})