module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'func-names': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'never'],
    'import/extensions': [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
