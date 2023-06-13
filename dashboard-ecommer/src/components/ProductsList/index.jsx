import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3030/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{}}>
      {/* Renderize los productos */}
      {products.map(product => (

        
        <div key={product.id}>
          <h2 cclassName={styles.productsList} >{product.name}</h2>
          <p>{product.description}</p>
         {/* <img src={"http://localhost:3030/img/productos/" + product.images[0].image} alt='Product' style={{ width: '20rem' }} /> */}
         
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
