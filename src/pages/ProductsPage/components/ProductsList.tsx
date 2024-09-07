import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import {
  fetchProducts,
  toggleShowFavorites,
} from "../../../redux/productsSlice";
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
  const handleToggleView = () => {
    dispatch(toggleShowFavorites());
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <FilterButton
        handleToggleView={handleToggleView}
        isShowFavor={favorites.show}
      />
      <ul className={classes.productList}>
        {filteredProducts.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
