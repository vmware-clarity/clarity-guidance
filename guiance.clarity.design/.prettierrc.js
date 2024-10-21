module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
};
