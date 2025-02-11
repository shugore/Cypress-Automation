import { registrationPage } from "../../pageobjects/registrationPage"

const registerObj = new registrationPage()

import testData from '../../fixtures/testData.json'

describe(' test automation', () => {



    it('register flow', () => {

        registerObj.openURL()
        registerObj.enterFirstName(testData.firstName)
        registerObj.enterlastName(testData.lastName)
        registerObj.enterEmail(testData.email)
        registerObj.enterTelephone(testData.telephone)
        registerObj.enterPassword(testData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()



    })
})