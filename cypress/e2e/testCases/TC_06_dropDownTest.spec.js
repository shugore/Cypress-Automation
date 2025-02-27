import { dropDownPage } from "../../pageobjects/dropDownPage"

const dropDownPageObj = new dropDownPage()

import testData from '../../fixtures/testData.json'

describe('TC_01_Login Test Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Verify customer is able to login or not', () => {

        dropDownPageObj.scrollPage()

        dropDownPageObj.clickOnDropDown()

        dropDownPageObj.clicksimpleDropDown(testData.option)

        dropDownPageObj.clickCountry(testData.countryName)

        cy.url().should('include', '/dropdown'); 

       

      


    })
})