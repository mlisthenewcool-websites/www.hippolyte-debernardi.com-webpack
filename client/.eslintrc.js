// check next links to understand those rules
// https://github.com/prettier/eslint-config-prettier

const rules = {
  'max-len': ['error', 80, 2, { ignoreUrls: true }],
  'no-console': ['error'],
  'no-continue': 'off',
  'no-restricted-syntax': 'off',
  'no-underscore-dangle': 'off',
  'import/extensions': 'off',
  'import/no-unresolved': 'off',
  'import/prefer-default-export': 'off',
  'implicit-arrow-linebreak': 'off',
  'operator-linebreak': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true },
  ],

  // --- react rules ---
  'react/destructuring-assignment': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], // default
  'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',

  // --- typescript ---
  // ignore eslint errors on interface/type imports
  '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  // I don't type functions, remove the warning
  // see https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
  '@typescript-eslint/explicit-module-boundary-types': ['off']
};

module.exports = {
  rules,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
};
