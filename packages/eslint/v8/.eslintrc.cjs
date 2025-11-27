/** @type {import('eslint').Linter.Config} */

const allSettings = require('./settings/index.js');
const allRules = require('./rules/index.js');

// Config:{
//    test: false | true,
//    storybook:true,
//    defaultRules:{},
//    defaultOverrides
//    plugins
//}

module.exports = (
  config = {
    test: false,
    storybook: false,
    defaultRules: {},
    defaultOverrides: [],
    plugins: [],
  },
) => {
  const envConfiguration = {
    browser: true,
    es2021: true,
    node: true,
    jest: config.test === true ? true : false,
  };

  const overrideConfiguration =
    config.storybook || config.test
      ? [
          {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
              'max-len': 'off',
            },
          },
        ]
      : [];

  return {
    root: true,
    env: envConfiguration,
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
    ],
    ignorePatterns: ['dist', 'build', 'coverage', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'react-hooks',
      'simple-import-sort',
      'import',
      'custom',
      ...plugins,
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      ...allRules,
      'custom/one-component': 'error',
      ...config.defaultRules,
    },
    settings: {
      ...allSettings,
      react: {
        version: 'detect',
      },
    },
    overrides: [...overrideConfiguration, ...config.defaultOverrides],
  };
};
