module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{json,md}': ['prettier --write', 'git add'],
}
