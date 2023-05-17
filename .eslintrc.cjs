module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', node: true },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-absolute-path': 0,
    'react/prop-types': 0
  }
}
