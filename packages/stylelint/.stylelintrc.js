/** @type {import('stylelint').Config} */

// {
//	scss:true | false,
//	rules:{}
// }

module.exports = ({ scss = false, rules = {} }) => {
  const defaultExtends = ['stylelint-config-standard', 'stylelint-config-idiomatic-order'];
  const extendsWithParams = scss
    ? [...defaultExtends, 'stylelint-config-standard-scss']
    : defaultExtends;

  const scssRules = scss
    ? {
        'scss/percent-placeholder-pattern': [
          '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
          {
            message: 'Expected pattern for %-placeholders to be snake_case',
          },
        ],
        'scss/at-mixin-pattern': [
          '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
          {
            message: 'Expected pattern for mixin to be snake_case',
          },
        ],
      }
    : {};

  return {
    ignoreFiles: ['dist/**/*.css', 'coverage/**/*.css', 'build/**/*.css'],
    extends: extendsWithParams,
    rules: {
      'selector-attribute-quotes': 'always',
      'comment-whitespace-inside': 'always',
      'comment-empty-line-before': 'always',
      'font-weight-notation': 'numeric',
      'color-function-alias-notation': 'with-alpha',
      'color-function-notation': 'modern',
      'color-hex-length': 'long',
      'color-named': 'never',
      'alpha-value-notation': 'number',
      'rule-empty-line-before': [
        'always',
        {
          ignore: ['first-nested'],
        },
      ],
      'declaration-empty-line-before': [
        'always',
        {
          ignore: ['first-nested', 'after-declaration'],
        },
      ],
      'value-keyword-case': ['lower', { ignoreProperties: ['transition', 'text-rendering'] }],
      'selector-pseudo-element-colon-notation': 'single',
      'selector-no-qualifying-type': [
        true,
        {
          ignore: ['attribute', 'class'],
        },
      ],
      'selector-class-pattern': [
        '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
        {
          message: 'Expected class selector to be snake_case',
        },
      ],
      'keyframes-name-pattern': [
        '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
        { message: 'Expected keyframe name to be snake_case' },
      ],
      ...scssRules,
      ...rules,
    },
  };
};
