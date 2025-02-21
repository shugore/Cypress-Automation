import { webInputsPage } from "../../pageobjects/webInputsPage"

const webInputsPageObj = new webInputsPage()

import testData from '../../fixtures/testData.json'

describe('Tc_04_Web Inputs functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should be able to check web inputs', () => {

        webInputsPageObj.clickOnWebInputs()

        cy.scrollToBottom()

        webInputsPageObj.enterInputNumber(testData.password)

        webInputsPageObj.enterInputText(testData.password)

        webInputsPageObj.enterInputPassword(testData.password)


    })
})