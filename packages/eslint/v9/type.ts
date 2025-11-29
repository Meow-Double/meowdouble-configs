type eslint = import('typescript-eslint').FlatConfig.Config;

export interface DefaultOptionsType {
  plugins: eslint['plugins'];
  globals: {
    tests: null | 'jest' | 'vitest'; // vitest or jest
    es: 'es2024';
    other: eslint['languageOptions']['globals'];
  };
  ignore: string[];
  defaultRules: {
    rules: Record<string, string>;
    files: string[];
  };
  config: eslint[];
  fsd: boolean; //custom
  project: eslint['languageOptions']['parserOptions']['project'];
}
