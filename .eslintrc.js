module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": { 
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
     // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }], //should add ".ts" if typescript project
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
