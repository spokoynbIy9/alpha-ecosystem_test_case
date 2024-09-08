import { useEffect } from "react";

import { fetchProducts } from "../../../redux/productsSlice";
import { Product } from "../../../types/products";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductItem from "./ProductItem";
import useStyles from "../styles";
const ProductsList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { products, favorites } = useAppSelector((state) => state.products);

  const filteredProducts = favorites.show
    ? products.filter((product) => favorites.ids.includes(product.id))
    : products;

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
