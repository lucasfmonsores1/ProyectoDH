import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
   
    fetch('http://localhost:3003/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error));
  }, []);

  return (
    <div clastyles>
      {/* Renderize los productos */}
      {products.map(product => (

        
        <div key={product.id}>
          <h2 className={styles.productsList} >{product.name}</h2>
          <p>{product.description}</p>
         <img src={"http://localhost:3003/img/" + product.subcategory.category.name + "/" + product.images.name} alt='Product' style={{ width: '20rem' }} /> 
         <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
