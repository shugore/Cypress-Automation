const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  charts: true,

  video: true,

  embeddedScreenshots: true,

  e2e: {

    //baseUrl:'https://parabank.parasoft.com/',
    baseUrl:'https://practice.expandtesting.com/#tools',
  

    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
     
    },
   },
});
  