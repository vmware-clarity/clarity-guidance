// @ts-check
const eslint = require('@eslint/js');
const eslintPluginImport = require('eslint-plugin-import');
const typescriptEslint = require('typescript-eslint');
const angularEslint = require('angular-eslint');

module.exports = typescriptEslint.config(
  {
    ignores: ['.angular/**', 'dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...typescriptEslint.configs.stylistic,
      ...angularEslint.configs.tsRecommended,
    ],
    processor: angularEslint.processInlineTemplates,
    plugins: { import: eslintPluginImport },
    rules: {
      'import/first': 'error',
      'import/no-absolute-path': 'error',
      'import/no-useless-path-segments': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          groups: [
            ['builtin', 'external'],
            ['parent', 'sibling'],
          ],
          'newlines-between': 'always',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angularEslint.configs.templateRecommended, ...angularEslint.configs.templateAccessibility],
    rules: {},
  },
);
