const { combineTasks, getTsFiles } = require('./lint-staged.helpers');

module.exports = {
  '*.{css,html}': 'stylelint',
  '*.scss': 'stylelint --syntax=scss',
  '*.{ts,html}': paths =>
    combineTasks(
      'ng lint --format=stylish',
      getTsFiles(paths).map(file => `--files ${file}`)
    ),
};
