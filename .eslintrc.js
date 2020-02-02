module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  settings: {
    'import/extensions': ['.js'],
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/no-unused-modules': ['error', {
      missingExports: true,
      unusedExports: true,
    }],
  },
};
