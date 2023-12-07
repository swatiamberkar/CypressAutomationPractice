const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout : 4000,
  projectId: "2ce44b",
  env: {
    url:"https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
  retries: {
    runMode: 1
    }
});
