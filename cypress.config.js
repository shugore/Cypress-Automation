const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //baseUrl:'https://parabank.parasoft.com/',
    baseUrl:'https://practice.expandtesting.com/#tools',
  

    setupNodeEvents(on, config) {
      // implement node event listeners here

     
    },
   },
});
  