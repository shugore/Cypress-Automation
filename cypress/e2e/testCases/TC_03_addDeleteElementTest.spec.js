import { addDeletePage } from "../../pageobjects/addDeletePage"

const addDeletePageObj = new addDeletePage()

describe('TC_03_ Add / Delete Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should be able to first check delete if present then click on it otherwise click add element and then click delete.', () => {

        addDeletePageObj.scrollPage()

        addDeletePageObj.clickOnaddDelete()

        addDeletePageObj.clickAddElement()

    })
})