'use strict';
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
      files: '*.json',
      options: { printWidth: Infinity },
    },
    {
      files: '*.json5',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: { proseWrap: 'preserve' },
    },
    {
      files: ['*.svg', '*.xml'],
      options: { parser: 'xml' },
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
    {
      files: ['.prettierrc', '.stylelintrc'],
      options: { parser: 'json' },
    },
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
    {
      files: ['.all-contributorsrc'],
      options: {
        parser: 'json-stringify',
        singleQuote: false,
      },
    },
    {
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};
