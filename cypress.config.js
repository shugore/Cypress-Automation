const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 60000,
  responseTimeout: 3000,
  scrollBehavior: "center",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Automation-Reports",
    video: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    //saveAllAttempts: false,
    reportDir: "cypress/test_results",
    overwrite: true,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: "https://practice.expandtesting.com/#tools",
    
    specPattern: "cypress/e2e/**/*.spec.{ts,tsx,js}",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);

      // It will only save failed videos
      on("after:spec", (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) => {
            return test.attempts.some((attempt) => attempt.state === "failed");
          });
          if (!failures && fs.existsSync(results.video)) {
            // delete the video if the spec passed and no tests retried
            return fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
});
