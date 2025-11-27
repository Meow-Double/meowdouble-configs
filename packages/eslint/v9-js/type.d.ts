type eslint = import('typescript-eslint').FlatConfig.Config;
export interface DefaultOptionsType {
    plugins: eslint['plugins'];
    globals: {
        tests: null | 'jest' | 'vitest';
        es: 'es2024';
        other: any;
    };
    ignore: string[];
    defaultRules: {
        rules: Record<string, string>;
        files: string[];
    };
    config: eslint[];
    fsd: boolean;
    project: eslint['languageOptions']['parserOptions']['project'];
}
export {};
