const { SPECIFIC_FILES } = require('../constants');

/**
 * @type {import('prettier').Options}
 * @schema https://json.schemastore.org/prettierrc
 */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 100,
  quoteProps: 'preserve',
  singleQuote: true,
  tabs: false,
  tabWidth: 2,
  semicolon: true,
  trailingComma: 'es5',

  overrides: [
    ...SPECIFIC_FILES,
  ],
};
