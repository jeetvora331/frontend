module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'next',
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['@typescript-eslint', 'import', 'jsx-a11y'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        'react/jsx-key': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        semi: ['error', 'always'],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                depth: 3,
            },
        ],
    },
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        '.next',
        'coverage',
        'dist',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
};
