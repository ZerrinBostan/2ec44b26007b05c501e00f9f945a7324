import React, { Component } from 'react'
import { useState } from 'react';

const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState();

    const handleProductData = (data) => {
        setProductData(data);
    }

    return (
      <ProductContext.Provider
        value={{
          productData,
          setProductData,
          handleProductData,
        }}
      >
        {children}
      </ProductContext.Provider>
    )
}

export default ProductContext

export { ProductProvider }