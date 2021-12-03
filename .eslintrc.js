module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module'
  },
  extends: ['plugin:vue/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {}
}
