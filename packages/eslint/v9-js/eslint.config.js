import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintSimpleImport from 'eslint-plugin-simple-import-sort';
import eslintImport from 'eslint-plugin-import';
import { defaultRules, importRules, reactHooksRules, reactRules } from './rules/index.js';
import custom from './custom/index.js';
import settings from './settings/index.js';
const { fsdPath } = custom;
/** @type {import("typescript-eslint").FlatConfig.ConfigArray}  */
export default (options = {
    config: [],
    defaultRules: {
        files: [],
        rules: {},
    },
    fsd: false,
    globals: {
        es: 'es2024',
        tests: null,
        other: {},
    },
    ignore: [],
    plugins: {},
    project: ['tsconfig.json', 'tsconfig.node.json'],
}) => {
    const otherPlugins = {};
    const otherRules = {};
    const ignores = ['node_modules', 'dist', ...options.ignore];
    if (options.fsd) {
        otherPlugins['fsd-path'] = fsdPath;
        otherRules['fsd-path/slice-path'] = 'error';
    }
    return [
        { ignores },
        ...tseslint.config(js.configs.recommended, ...tseslint.configs.recommended.map((config) => ({
            ...config,
        })), {
            settings,
            plugins: {
                '@typescript-eslint': tseslint.plugin,
                'react-hooks': eslintReactHooks,
                'react-refresh': eslintReactRefresh,
                'simple-import-sort': eslintSimpleImport,
                import: eslintImport,
                react: eslintReact,
                ...otherPlugins,
                ...options.plugins,
            },
            files: ['**/*.{ts,tsx}', ...options.defaultRules.files],
            rules: {
                '@typescript-eslint/no-explicit-any': 'warn',
                ...defaultRules,
                ...importRules,
                ...reactHooksRules,
                ...reactRules,
                ...otherRules,
                ...options.defaultRules.rules,
            },
            languageOptions: {
                globals: {
                    ...globals.node,
                    ...globals.browser,
                    ...globals[options.globals.es || 'es2024'],
                    ...(options.globals.tests && globals[options.globals.tests]),
                    ...options.globals.other,
                },
                parser: tseslint.parser,
                parserOptions: {
                    ecmaVersion: 'latest',
                    sourceType: 'module',
                    ecmaFeatures: {
                        jsx: true,
                    },
                    project: options.project,
                    tsconfigRootDir: process.cwd(),
                },
            },
        }, ...options.config),
    ];
};
