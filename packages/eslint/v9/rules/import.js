export default {
  'import/order': 'off',
  'import/extensions': 'off',
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': 'off',

  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // External packages:
        ['^react', '^@?\\w'],
        // Alias imports:
        ['^@(([\\/.]?\\w)|assets|test-utils)'],
        // Side effect imports:
        ['^\\u0000'],
        // Parent imports:
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports:
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports:
        ['^.+\\.s?css$'],
        // Svg icons imports:
        ['^.+\\.svg$'],
      ],
    },
  ],
};
