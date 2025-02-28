import { dropDownPage } from "../../pageobjects/dropDownPage"

const dropDownPageObj = new dropDownPage()

import testData from '../../fixtures/testData.json'

describe('TC_06_Drop Down Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should be able to select values from Drop Down', () => {

        dropDownPageObj.scrollPage()
        cy.task('steplog', 'Scroll Page to Dropdown');

        dropDownPageObj.clickOnDropDown()
        cy.task('steplog', 'Drop Down List Clicked');

        dropDownPageObj.clicksimpleDropDown(testData.option)
        cy.task('steplog', 'Option 1 Clicked');

        dropDownPageObj.clickCountry(testData.countryName)
        cy.task('steplog', 'Country selected');

        cy.url().should('include', '/dropdown'); 

    })
})