const { SPECIFIC_FILES } = require('../constants');

// @ts-check
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
  useTabs: false,
  tabWidth: 2,
  semi: true,
  trailingComma: 'es5',

  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 140,
      },
    },
    ...SPECIFIC_FILES,
  ],
};
