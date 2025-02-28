import { addDeletePage } from "../../pageobjects/addDeletePage"

const addDeletePageObj = new addDeletePage()

describe('TC_03_ Add / Delete Functionality', () => {

    before(() => {
        
        cy.visit('/'); 
        cy.task('steplog', 'URL Launched');     
    });


    it('Should be able to first check delete if present then click on it otherwise click add element and then click delete.', () => {

        addDeletePageObj.scrollPage()
        cy.task('steplog', 'Scroll Page For Visibility');    

        addDeletePageObj.clickOnaddDelete()
        cy.task('steplog', 'Add/Delete Button Clicked');    

        addDeletePageObj.clickAddElement()
        cy.task('steplog', 'Add Element As per its visibility');   

    })
})