export default {
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2, { checkAttributes: true }],
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'error',
    'react/button-has-type': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
        'error',
        {
            namedComponents: ['arrow-function'],
            unnamedComponents: 'arrow-function',
        },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
};
