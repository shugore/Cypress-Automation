import {forgotPasswordPage} from "../../pageobjects/forgotPasswordPage"

const forgotPasswordPageObj = new forgotPasswordPage()

import testData from "../../fixtures/testData.json"

describe('TC_02_Test Automation - Forgot Password Functionality', () => {

    before(() => {
        
        cy.visit('/');
        cy.task('steplog', 'URL Launched');    
    });


    it('Should be able to check Forgot Password Functionality',()=>{

        forgotPasswordPageObj.clickOnforgotPassowrd()
        cy.task('steplog', 'Forgot Password Clicked');  

        forgotPasswordPageObj.enterEmail(testData.Email)
        cy.task('steplog', 'Email Entered');  

        forgotPasswordPageObj.clickOnRetrievePassword()
        cy.task('steplog', 'Clicked On Retrive Password');  

        forgotPasswordPageObj.verifyText()
        cy.task('steplog', 'Text Verified :- An e-mail has been sent to you'); 

    })

})