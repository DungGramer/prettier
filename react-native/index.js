const { SPECIFIC_FILES } = require("../constants");

/**
 * @type {import('prettier').Options}
 * @schema https://json.schemastore.org/prettierrc
 */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  requirePragma: true,
  singleQuote: true,
  trailingComma: 'all',

  overwrites: [
    ...SPECIFIC_FILES
  ]
};
