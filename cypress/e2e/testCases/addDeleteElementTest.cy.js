import { addDeletePage } from "../../pageobjects/addDeletePage"

const addDeletePageObj = new addDeletePage()

import testData from '../../fixtures/testData.json'

describe('Test Automation - Customer Login', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        addDeletePageObj.scrollPage()

        addDeletePageObj.clickOnaddDelete()

        addDeletePageObj.clickAddElement()

    })
})