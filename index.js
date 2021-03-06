module.exports = {
  extends: [
    // import
    './configs/import/import.js',

    // promise
    './configs/promise/promise.js',

    // node
    './configs/node/node.js',

    // unicorn
    './configs/unicorn/unicorn.js',

    // eslint-comments
    './configs/eslint-comments/eslint-comments.js',

    // airbnb
    './configs/airbnb/airbnb.js',

    // prettier
    './configs/prettier/prettier.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
