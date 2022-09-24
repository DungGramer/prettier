<!-- Title -->
<h1 align="center">
  @dunggramer/prettier
</h1>

<!-- Description -->
<h4 align="center"> 
  The <a href="https://prettier.io/docs/en/configuration.html#sharing-configurations">shareable configuration</a>
  for <a href="https://prettier.io/">Prettier</a> in your project
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@dunggramer/prettier">
    <img
      src="https://img.shields.io/npm/v/@dunggramer/prettier?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://www.npmjs.com/package/@dunggramer/prettier">
    <img
      src="https://img.badgesize.io/DungGramer/prettier/master/prettier.config.js.svg?label=File_size"
      alt="File size"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#extending">Extending</a> •
  <a href="#explanation">Explanation</a> • 
  <a href="#prettier-properties">Prettier Properties</a>
</p>

<br>

## Installation

```bash
npm i -D prettier @dunggramer/prettier
# or
yarn add -D prettier @dunggramer/prettier
# or
pnpm i -D prettier @dunggramer/prettier
```

## Usage

To enable the rules, add a `prettier` property in your `package.json`. See the [Prettier configuration docs](https://prettier.io/docs/en/configuration.html) for more details.

```json
{
  "name": "my-projects-name",
  "prettier": "@dunggramer/prettier",
  "devDependencies": {
    "@dunggramer/prettier": "^2.2.0"
  }
}
```

If you don't want to use package.json, you can use any of the supported extensions to export a string:

```json
// `.prettierrc.json`
"@dunggramer/prettier"
```

```js
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@dunggramer/prettier';
```

It is also recommended to add the following scripts to your `package.json` for easy usage.

```json
"format": "prettier --ignore-path='.gitignore' --list-different --write .",
"format:check": "prettier --ignore-path='.gitignore' --check .",
```

Additionally, it is recommended to install the [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to get in-editor formatting support.

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is required, it is possible. To extend a configuration you will need to use a `prettier.config.js` file that exports an object:

```javascript
// prettier.config.js
module.exports = {
  ...require('@dunggramer/prettier'),
  semi: false,
};
```

```javascript
// prettier.config.js
module.exports = {
  plugins: ['@dunggramer/prettier'],
  semi: false,
};
```

```javascript
// prettier.config.js
module.exports = {
  plugins: [require('@dunggramer/prettier')],
  semi: false,
};
```

Read more configuration options in plugins here:

- [prettier-plugin-jsdoc](https://github.com/homer0/packages/tree/main/packages/public/prettier-plugin-jsdoc#readme)
- [prettier-plugin-organize-imports](https://github.com/trivago/prettier-plugin-sort-imports#readme)
- [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes#readme)
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson#readme)

## Prettier Properties

#### arrowParens

Always include parentheses | Example: (x) => x  
`arrowParens: 'always'`

#### bracketSpacing

Print spaces between brackets in object literals | Example: {foo: bar} => { foo: bar }  
`bracketSpacing: true`

#### endOfLine

Use the operating system's line endings | Example: \n => \r\n  
`endOfLine: 'auto'`

#### jsxSingleQuote

Use double quotes in JSX.
`jsxSingleQuote: false`

#### pluginSearchDirs

Disable search folder plugins.  
`pluginSearchDirs: false`

#### printWidth

For readability, and to avoid horizontal scrolling.  
`printWidth: 80`

#### proseWrap

Wrap prose if it exceeds the print width.  
`proseWrap: 'always'`

#### quoteProps

If at least one property in an object requires quotes, quote all properties  
`quoteProps: 'consistent'`  
Example:

```js
{foo: "bar", "baz": 42, "qux": true} => {"foo": "bar", "baz": 42, "qux": true}
```

#### semi

Print semicolons at the ends of statements.  
`semi: true`  
Example:

```js
console.log('foo') => console.log('foo');
```

#### singleQuote

Use single quotes instead of double quotes.  
`singleQuote: true`  
Example:

```js
"foo" => 'foo'
```

#### tabWidth

Specify the number of spaces per indentation-level.  
`tabWidth: 2`

#### trailingComma

Print trailing commas wherever possible when multi-line.  
`trailingComma: 'es5'`  
Example:

```diff
const user = {
  firstName: 'foo',
  lastName: 'bar'
};
=> ---
const user = {
  firstName: 'foo',
+ lastName: 'bar',
};
```

#### useTabs

Indent lines with spaces instead of tabs. Using the space bar makes the layout more flexible.  
`useTabs: false`