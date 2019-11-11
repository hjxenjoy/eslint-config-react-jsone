# eslint-config-react-jsone

eslint config for create-react-app with typescript

## Installation

```sh
npm install --save-dev eslint-config-react-jsone
yarn add -D eslint-config-react-jsone
```

## Configuration

### Add eslint config file

1. remove eslintConfig in `package.json`
2. create `.eslintrc` file in root directory

```json
{
  "extends": "react-jsone"
}
```

### Add prettier config file

create `.prettierrc` file into root directory

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["*.css", "*.less", "*.scss"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

### Add eslint autoFixOnSave & ts file error tips

Add code below into `.vscode/settings.json`

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact"]
}
```
