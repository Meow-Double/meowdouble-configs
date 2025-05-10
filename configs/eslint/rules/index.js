const baseRules = require('./base.js');
const reactRules = require('./plugins/react.js');
const importRules = require('./plugins/import.js');
const reactHooksRules = require('./plugins/react-hooks.js');

module.exports = {
  ...baseRules,
  ...reactRules,
  ...importRules,
  ...reactHooksRules,
};
