import {forgotPasswordPage} from "../../pageobjects/forgotPasswordPage"

const forgotPasswordPageObj = new forgotPasswordPage()

import testData from "../../fixtures/testData.json"

describe('TC_02_Test Automation - Forgot Password Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should be able to check Forgot Password Functionality',()=>{

        forgotPasswordPageObj.clickOnforgotPassowrd()

        forgotPasswordPageObj.enterEmail(testData.Email)

        forgotPasswordPageObj.clickOnRetrievePassword()

        forgotPasswordPageObj.verifyText()

    })

})