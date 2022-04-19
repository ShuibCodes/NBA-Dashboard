//  will configure Cypress Webpack Dev Server to use the same Webpack config as CRA.

const injectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}