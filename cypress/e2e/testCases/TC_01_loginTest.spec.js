import { loginPage } from "../../pageobjects/LoginPage"

const testloginPageObj = new loginPage()

import testData from '../../fixtures/testData.json'

describe('TC_01_Login Test Functionality', () => {

    before(() => {
        
        cy.visit('/');
        cy.task('steplog', 'URL Launched');  
    });


    it('Verify customer is able to login or not', () => {

        testloginPageObj.clickOntestLogin()
        cy.task('steplog', 'Clicked on Test Login');

        testloginPageObj.scrollToUsername()
        cy.task('steplog', 'Scroll to Username visibility');

        testloginPageObj.enterUsername(testData.Username)
        cy.task('steplog', 'Username Entered');

        testloginPageObj.enterPassword(testData.Password)
        cy.task('steplog', 'Password Entered');

        testloginPageObj.clickOnlogin()
        cy.task('steplog', 'Login Clicked');

        cy.url().should('include', '/secure'); 

    })
})