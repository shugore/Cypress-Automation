import { loginPage } from "../../pageobjects/LoginPage"

const testloginPageObj = new loginPage()

import testData from '../../fixtures/testData.json'

describe('TC_01_Login Test Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        testloginPageObj.clickOntestLogin()

        testloginPageObj.scrollToUsername()

        testloginPageObj.enterUsername(testData.Username)

        testloginPageObj.enterPassword(testData.Password)

        testloginPageObj.clickOnlogin()

        cy.url().should('include', '/secure'); 

       

      


    })
})