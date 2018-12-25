module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint-config-airbnb-base/legacy',
    '../rules/index.js',
    '../rules/no-semi.js'
  ].map(require.resolve)
}