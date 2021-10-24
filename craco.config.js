const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@App': path.resolve(__dirname, './src/App'),
      '@components/breadcrumb': path.resolve(__dirname, './src/components/Breadcrumb/Breadcrumb'),
      '@components/error': path.resolve(__dirname, './src/components/Error/Error'),
      '@components/loading': path.resolve(__dirname, './src/components/Loading/Loading'),
      '@components/productList': path.resolve(__dirname, './src/components/ProductList/ProductList'),
      '@components/productListItem': path.resolve(__dirname, './src/components/ProductListItem/ProductListItem'),
      '@components/searchBar': path.resolve(__dirname, './src/components/SearchBar/SearchBar'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@pages/home': path.resolve(__dirname, './src/pages/Home/Home'),
      '@pages/search': path.resolve(__dirname, './src/pages/Search/Search'),
      '@pages/product': path.resolve(__dirname, './src/pages/Product/Product'),
      '@pages/notFound': path.resolve(__dirname, './src/pages/NotFound/NotFound'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
};
