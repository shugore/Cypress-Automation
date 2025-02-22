import { webInputsPage } from "../../pageobjects/webInputsPage"

const webInputsPageObj = new webInputsPage()

import testData from '../../fixtures/testData.json'

describe('Tc_04_Web Inputs functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should be able to check web inputs', () => {

        webInputsPageObj.clickOnWebInputs()

        webInputsPageObj.scrollToPage()

        webInputsPageObj.enterInputNumber(testData.number)

        webInputsPageObj.enterInputText(testData.text)

        webInputsPageObj.enterInputPassword(testData.text-password)


    })
})