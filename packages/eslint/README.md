# Eslint config🧹

This npm package include eslind config for your code.

#### Install

Use this command to set the stylelint configure

```
npm i -D @meow-double/eslint
```

</br>

> ℹ️INFO  
> Add the npm package as a dev dependency

</br>

The library allows you to use TypeScript (TS) at once thanks to **@typescript-eslint/parser**

</br>

#### How use

1. Create a file named <b>.eslintrc.cjs</b> in the root of the directory

> ℹ️INFO  
> File must contain the <b>.cjs</b> extension, since commonjs is supported

2. <b>Import</b> the eslint configuration and <b>export</b> it externally properly
   </br>

#### Example of use

The <b>@meow-double/eslint</b> library provides you with an eslint function that returns the desired config. You can also pass a customized config as an argument, which will change the eslint-config itself from the outside. If you don't need to change anything externally, the default settings will be used.
</br>

```
const { eslint } = require('eslint-old');

module.exports = eslint({});
```

</br>

#### Transmitted parameters

<b>All arguments are passed as properties of the object</b>
</br>

| Argument     | Available values  | Description                                                                                                                                                      |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| test         | `jest` \| `null`  | This parameter registers the jest environment in env. Also thanks to this argument, test files use a modified set of eslint configuration rules.                 |
| storybook    | `true` \| `false` | With this argument, the modified eslint config rules will be applied to files with the <b>.stories</b> extension                                                 |
| defaultRules | `Object`          | By passing an object to this argument you can directly change the rules for eslint configa. Moreover, the rules for different plugins will be taken into account |

> ℹ️INFO  
> Of course, this package will not be able to give you flexible configuration settings. If you are using this package, you probably don't need flexible configuration. Otherwise, use your own configuration

</br>

<b>Default values that are passed automatically when executing the eslint function</b>

```
{
    test: null,
    storybook:false,
    allRules:{}
}
```

#### Flexible customization of the defaultRules argument

The object is passed with all the rules and their values that you would like to change. Rules of used plugins are also supported. The list of used plugins is provided below in the documentation.
</br>

<b>Example</b>

```
'max-len': ['error', { ignoreComments: true, code: 100 }],
'no-useless-assignment': 'off',
'require-await': 'error',
'no-unused-vars': 'warn',
'react/jsx-props-no-spreading': 'off',
'react/no-array-index-key': 'error'

```

#### Script

You need to add script on your <b>package.json</b>  
</br>
<b>For JS</b>

```
    "lint:js": "npx eslint --config .eslintrc.cjs \"src/**/*.{js,jsx}\"",
    "lint:js:fix": "npx eslint --config .eslintrc.cjs \"src/**/*.{js,jsx}\" --fix"
```

</br>
<b>For TS</b>

```
    "lint:ts": "npx eslint --config .eslintrc.cjs \"src/**/*.{ts,tsx}\"",
    "lint:ts:fix": "npx eslint --config .eslintrc.cjs \"src/**/*.{ts,tsx}\" --fix",
```

### All the rules used

- 5 used plugins
- 1 custom plugin
- 1 parser

<b>All plugins: 7</b>

</br>

> ℹ️INFO  
> By default, ready-made rule sets from the plugins themselves are used

```
 extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
    ],
```

</br>

#### Base rules

| Rule Name                       | Used value                                  |
| ------------------------------- | ------------------------------------------- |
| **consistent-return**           | `'off'`                                     |
| **no-shadow**                   | `'warn'`                                    |
| **no-duplicate-imports**        | `'error'`                                   |
| **no-fallthrough**              | `'warn'`                                    |
| **no-promise-executor-return**  | `'error'`                                   |
| **no-self-compare**             | `'error'`                                   |
| **no-template-curly-in-string** | `'error'`                                   |
| **no-use-before-define**        | `'error'`                                   |
| **no-useless-assignment**       | `'off'`                                     |
| **require-atomic-updates**      | `'error'`                                   |
| **require-await**               | `'error'`                                   |
| **no-param-reassign**           | `['error', { props: false }]`               |
| **no-console**                  | `['error', { allow: ['info', 'error'] }]`   |
| **no-underscore-dangle**        | `['error', { allow: ['_id', '_default'] }]` |
| **no-unused-vars**              | `'warn'`                                    |

</br>

#### Eslint-plugin-react

| Rule Name                               | Used value                                                                                |
| --------------------------------------- | ----------------------------------------------------------------------------------------- |
| **react/prop-types**                    | `'off'`                                                                                   |
| **react/jsx-indent**                    | `[2, 2, { checkAttributes: true }]`                                                       |
| **react/no-children-prop**              | `'off'`                                                                                   |
| **react/react-in-jsx-scope**            | `'off'`                                                                                   |
| **react/no-unused-prop-types**          | `'error'`                                                                                 |
| **react/require-default-props**         | `'off'`                                                                                   |
| **react/jsx-props-no-spreading**        | `'off'`                                                                                   |
| **react/no-array-index-key**            | `'error'`                                                                                 |
| **react/button-has-type**               | `'warn'`                                                                                  |
| **react-hooks/exhaustive-deps**         | `'warn'`                                                                                  |
| **react/function-component-definition** | `['error', { namedComponents: ['arrow-function'], unnamedComponents: 'arrow-function' }]` |
| **react/jsx-no-useless-fragment**       | `['error', { allowExpressions: true }]`                                                   |

</br>

#### Eslint-plugin-react-hooks

| Rule Name                       | Used value |
| ------------------------------- | ---------- |
| **react-hooks/rules-of-hooks**  | `'error'`  |
| **react-hooks/exhaustive-deps** | `error`    |

</br>

#### Eslint-plugin-import

| Rule Name                             | Used type |
| ------------------------------------- | --------- |
| **import/order**                      | `'off'`   |
| **import/extensions**                 | `'off'`   |
| **import/prefer-default-export**      | `'off'`   |
| **import/no-extraneous-dependencies** | `'off'`   |

</br>

#### Eslint-plugin-simple-import-sort

| Rule Name                      | Used type                    |
| ------------------------------ | ---------------------------- |
| **simple-import-sort/exports** | `'error'`                    |
| **simple-import-sort/imports** | `['error', (objectOptions)]` |

**Object options:**

```
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
    }
```

</br>

#### @typescript-eslint/eslint-plugin

| Rule Name                              | Used type |
| -------------------------------------- | --------- |
| **@typescript-eslint/no-explicit-any** | `'warn'`  |

</br>

#### Custom plugin

| Rule Name                | Used type |
| ------------------------ | --------- |
| **custom/one-component** | `'error'` |

The rule prohibits the use of two react components in one file

</br>

❌Example of **incorrect** code

```
export const App = () => {
    return <div><SecondaryComponent /></div>
}

const SecondaryComponent = () => <p>This is a secondary component</p>
```

</br>

✅Example of **correct** code

```
import { SecondaryComponent } from "@/components";

export const App = () => {
    return <div><SecondaryComponent /></div>
}
```
