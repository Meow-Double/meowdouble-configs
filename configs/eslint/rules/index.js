const baseRules = require("./base.js")
const reactRules = require("./plugins/react.js")
const importRules = require("./plugins/import.js")


module.exports = {
    ...baseRules,
    ...reactRules,
    ...importRules
}