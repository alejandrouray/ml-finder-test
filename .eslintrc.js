module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    'import/resolver': {
      alias: {
        map: [
          ['@App', './src/App'],
          ['@components/breadcrumb', './src/components/Breadcrumb/Breadcrumb'],
          ['@components/error', './src/components/Error/Error'],
          ['@components/loading', './src/components/Loading/Loading'],
          ['@components/searchBar', './src/components/SearchBar/SearchBar'],
          ['@components/productList', './src/components/ProductList/ProductList'],
          ['@components/productListItem', './src/components/ProductListItem/ProductListItem'],
          ['@context', './src/context/'],
          ['@pages/home', './src/pages/Home/Home'],
          ['@pages/search', './src/pages/Search/Search'],
          ['@pages/product', './src/pages/Product/Product'],
          ['@pages/notFound', './src/pages/NotFound/NotFound'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
  },
};
