import { loginPage } from "../../pageobjects/LoginPage"

const testloginPageObj = new loginPage()

import testData from '../../fixtures/testData.json'

describe('Test Automation - Login Test Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        testloginPageObj.clickOntestLogin()

        cy.scrollToBottom()

        testloginPageObj.enterUsername(testData.Username)

        testloginPageObj.enterPassword(testData.Password)

        testloginPageObj.clickOnlogin()

        cy.url().should('include', '/secure'); 

       

      


    })
})