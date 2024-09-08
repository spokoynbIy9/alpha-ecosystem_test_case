import { useEffect } from "react";

import { fetchProducts } from "../../../redux/productsSlice";
import { Product } from "../../../types/products";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductItem from "./ProductItem";
import useStyles from "../styles";
const ProductsList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { products, favorites, filters } = useAppSelector(
    (state) => state.products
  );

  const filteredProducts = products
    .filter((product) =>
      favorites.show ? favorites.ids.includes(product.id) : true
    )
    .filter((product) =>
      product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
    .filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <>
      <ul className={classes.productList}>
        {filteredProducts.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
