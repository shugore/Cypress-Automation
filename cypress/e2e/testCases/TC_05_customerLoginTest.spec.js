import { customerLoginPage } from "../../pageobjects/customerLoginPage"

const customerLoginObj = new customerLoginPage()

import testData from '../../fixtures/testData.json'

describe('TC_05_Customer Login Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should able to login', () => {

        customerLoginObj.enteruserName(testData.userName)

        customerLoginObj.enterPassword(testData.password)

        customerLoginObj.clickOnLogin()

        cy.url().should('include', '/overview.htm'); 

        cy.get('.caption').should('contain', 'Experience the difference');



    })
})