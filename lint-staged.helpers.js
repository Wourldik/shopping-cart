const fs = require('fs');

const htmlRegex = /\.html$/i;

function getUnique(paths) {
  return [...new Set(paths)];
}

function splitByExtension(paths) {
  return paths.reduce(
    (acc, file) => {
      const type = htmlRegex.test(file) ? 'html' : 'ts';

      acc[type].push(file);

      return acc;
    },
    {
      ts: [],
      html: [],
    }
  );
}

function transformHtmlToTs(paths) {
  return paths
    .map(file => file.replace(htmlRegex, '.ts'))
    .filter(file => fs.existsSync(file));
}

function getTsFiles(paths) {
  const { ts: tsFiles, html: htmlFiles } = splitByExtension(paths);

  const existingFiles = transformHtmlToTs(htmlFiles);

  return tsFiles.length && existingFiles.length
    ? getUnique([...tsFiles, ...existingFiles])
    : [...tsFiles, ...existingFiles];
}

function combineTasks(cmd, files) {
  return !files || !files.length ? [] : [`${cmd} ${files.join(' ')}`];
}

module.exports = {
  getTsFiles,
  combineTasks,
};
