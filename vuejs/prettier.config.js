const { SPECIFIC_FILES } = require('./constants');

/**
 * @type {import('prettier').Options}
 * @schema https://json.schemastore.org/prettierrc
 */
module.exports = {
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,
  overrides: [...SPECIFIC_FILES],
};
