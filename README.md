<!-- Title -->
<h1 align="center">
  prettier-config
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
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
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

To enable the rules, add a `prettier` property in your `package.json`. See the
[Prettier configuration docs](https://prettier.io/docs/en/configuration.html) for more details.

```json
{
  "name": "my-projects-name",
  "prettier": "@dunggramer/prettier",
  "devDependencies" : {
    "@dunggramer/prettier": "^1.0.0"
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
module.exports = "@dunggramer/prettier";
```


It is also recommended to add the following scripts to your `package.json` for easy usage.

```json
"format": "prettier --ignore-path='.gitignore' --list-different --write .",
"format:check": "prettier --ignore-path='.gitignore' --check .",
```

Additionally, it is recommended to install the
[VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to
get in-editor formatting support.

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is
required, it is possible. To extend a configuration you will need to use a `prettier.config.js` file
that exports an object:

```javascript
module.exports = {
  ...require('@dunggramer/prettier'),
  semi: false,
}
```