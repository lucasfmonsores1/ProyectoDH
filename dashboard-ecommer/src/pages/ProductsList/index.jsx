import React, { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductsCard/ProductCard";
import { Grid } from "@mui/material";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div clastyles>
      {/* Renderize los productos */}
      <Grid container padding={5} gap={2}>
        {products.map((product) => (
          <Grid item>
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              imgSrc={
                "http://localhost:3003/img/" +
                product.subcategory.category.name +
                "/" +
                product.images.name
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsList;
