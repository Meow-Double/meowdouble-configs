import config9 from '@meow-double/eslint/v9';

export default config9({
  ignore: ['storybook-static'],
  config: [
    {
      files: ['**/src/**/*Icon.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
  defaultRules: {
    files: [],
    rules: {
      'custom/one-component': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/no-array-index-key': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-param-reassign': 'off',
    },
  },
  plugins: [],
  fsd: true,
  globals: {
    es: 'es2024',
    tests: 'vitest',
  },
  project: ['tsconfig.app.json'],
});
