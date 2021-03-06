module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/extensions": "always",
    "react/function-component-definition": [<enabled>, {
      "namedComponents": "function-declaration" | "function-expression" | "arrow-function" | Array<"function-declaration" | "function-expression" | "arrow-function">,
      "unnamedComponents": "function-expression" | "arrow-function" | Array<"function-expression" | "arrow-function">
    }],
  },
};
