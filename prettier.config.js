'use strict';

const { SPECIFIC_FILES } = require('./constants');

// @ts-check
/**
 * @type {import('prettier').Options}
 * @schema https://json.schemastore.org/prettierrc
 */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  jsxSingleQuote: false,
  pluginSearchDirs: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: '*.html',
      options: { printWidth: 120 },
    },
    {
      files: '*.vue',
      options: { vueIndentScriptAndStyle: true },
    },
    {
      files: ['*.yml', '*.yaml', '*.toml'],
      options: { tabWidth: 2, useTabs: false },
    },
    {
      files: '*.sol',
      options: {
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
      },
    },
    ...SPECIFIC_FILES,
  ],
};
