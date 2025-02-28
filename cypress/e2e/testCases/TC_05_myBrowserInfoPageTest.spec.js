import { myBrowserInfoPage } from "../../pageobjects/myBrowserInfoPage"

const myBrowserInfoPageObj = new myBrowserInfoPage()

import testData from '../../fixtures/testData.json'

describe('TC_05_Customer Login Functionality', () => {

    before(() => {
        
        cy.visit('/'); 
        cy.task('steplog', 'URL Launched');    
    });


    it('Should able to login', () => {

        myBrowserInfoPageObj.scrollPage()
        cy.task('steplog', 'Scrolling Page');   

        myBrowserInfoPageObj.clickOnbrowserInfo()
        cy.task('steplog', 'Browser Info Clicked');   

        myBrowserInfoPageObj.clickOnShowbrowserInfo() 
        cy.task('steplog', 'Show Browser Info Clicked');   

        myBrowserInfoPageObj.verifyInfo()
        cy.task('steplog', 'Verify Info ');   

    })
})