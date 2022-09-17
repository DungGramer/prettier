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

  // Plugins Config
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-attributes',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  tsdoc: true,
  overrides: [
    {
      files: '*.html',
      options: { printWidth: 120 },
    },
    {
      files: ['*.template.html', '*.component.html'],
      options: { parser: 'angular' },
    },
    {
      files: '*.js',
      options: { parser: 'flow' },
    },
    {
      files: '*.ts',
      options: { parser: 'typescript' },
    },
    {
      files: '*.json',
      options: { printWidth: Infinity },
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
      files: ['*.yml', '*.yaml'],
      options: { tabWidth: 2 },
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
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
        plugins: ['prettier-plugin-packagejson'],
      },
    },
  ],
};
