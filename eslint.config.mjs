import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['**/dist/**', '**/drizzle/**', '**/node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.bun,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@rush-pos/server'],
              message:
                'Do not import from @rush-pos/server outside of the server package.',
            },
            {
              group: ['@rush-pos/web'],
              message:
                'Do not import from @rush-pos/web outside of the web package.',
            },
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
