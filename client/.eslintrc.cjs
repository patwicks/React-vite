module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'prefer-arrow-functions'],
  rules: {
    'prettier/prettier': 0,
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'react/sort-comp': 0,
    'react/prop-types': 1,
    'no-useless-escape': 1,
    'max-len': [1, 151],
    'react/jsx-filename-extension': 0,
    'no-unused-vars': [1],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'react/function-component-definition': 0,
  },
}
