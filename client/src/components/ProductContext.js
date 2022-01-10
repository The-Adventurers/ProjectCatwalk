import React from 'react';

const ProductContext = React.createContext({
  productId: '',
  setProductId: () => {},
  currentProduct: {}
});

export default ProductContext;