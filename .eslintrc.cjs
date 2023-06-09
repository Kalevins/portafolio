module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-console': RULES_STATUS.ERROR,
    'no-unused-vars': RULES_STATUS.WARN,
    'no-var': RULES_STATUS.ERROR,
    'indent': ['error', 2],
  },
}
