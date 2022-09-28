export const SPECIFIC_FILES = Object.freeze([
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
]);
