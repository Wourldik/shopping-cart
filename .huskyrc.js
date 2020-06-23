function tasks(commands) {
  return commands.join(' && ');
}

module.exports = {
  hooks: {
    'pre-commit': tasks(['npm run reformat-staged', 'npm run lint-staged']),
    'post-commit': 'git update-index --again',
  },
};
