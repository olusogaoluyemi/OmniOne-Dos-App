const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  screenshotOnRunFailure: true,
  failOnStatusCode: false,
  e2e: {

    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    responseTimeout: 90000,
    requestTimeout: 90000,
    allowJs: true,
    checkJs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false, //Code wont automatically run test when false
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,  // Ensure screenshots are taken on failure
    video: true,  // Enable video recording (optional)
    env:{

      //Usage in test script cy.visit(Cypress.env('adminuRL'))
      adminURL: "https://dmsmonoadmindev.z6.web.core.windows.net/",
      SSO_URL: process.env.SSO_URL,

      dosURL: "https://dosmonorepodev.z6.web.core.windows.net/",
      

    }},
});
