import { myBrowserInfoPage } from "../../pageobjects/myBrowserInfoPage"

const myBrowserInfoPageObj = new myBrowserInfoPage()

import testData from '../../fixtures/testData.json'

describe('TC_05_Customer Login Functionality', () => {

    before(() => {
        
        cy.visit('/');  
    });


    it('Should able to login', () => {

        myBrowserInfoPageObj.scrollPage()

        myBrowserInfoPageObj.clickOnbrowserInfo()

        myBrowserInfoPageObj.clickOnShowbrowserInfo() 

        myBrowserInfoPageObj.verifyInfo()

        myBrowserInfoPageObj.verifyInfo2()
    })
})