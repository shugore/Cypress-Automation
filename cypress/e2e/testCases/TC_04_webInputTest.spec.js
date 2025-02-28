import { webInputsPage } from "../../pageobjects/webInputsPage"

const webInputsPageObj = new webInputsPage()

import testData from '../../fixtures/testData.json'

describe('Tc_04_Web Inputs functionality', () => {

    before(() => {
        
        cy.visit('/'); 
        cy.task('steplog', 'URL Launched');     
    });


    it('Should be able to check web inputs', () => {

        webInputsPageObj.clickOnWebInputs()
        cy.task('steplog', 'Web Inputs Clicked');    

        webInputsPageObj.scrollToPage()
        cy.task('steplog', 'Page Scrolling'); 

        webInputsPageObj.enterInputNumber(testData.number)
        cy.task('steplog', 'Number Entered'); 

        webInputsPageObj.enterInputText(testData.text)
        cy.task('steplog', 'Text Entered'); 

        webInputsPageObj.enterInputPassword(testData.textpassword)
        cy.task('steplog', 'Text Passoword Entered'); 

    })
})