import { useEffect } from "react";

import {
  fetchProducts,
  setSkipFetchAfterDelete,
} from "../../../redux/productsSlice";
import { Product } from "../../../types/products";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductItem from "./ProductItem";
import useStyles from "../styles";
import { setCurrentPage } from "../../../redux/productsSlice";
import Pagination from "./Pagination";
const ProductsList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { products, favorites, filters, pagination, skipFetchAfterDelete } =
    useAppSelector((state) => state.products);

  useEffect(() => {
    if (!skipFetchAfterDelete) {
      dispatch(fetchProducts());
    }
  }, [dispatch, skipFetchAfterDelete]);

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

  //pagination logic
  const indexOfLastProduct =
    pagination.currentPage * pagination.productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    filteredProducts.length / pagination.productsPerPage
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <ul className={classes.productList}>
        {currentProducts.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductsList;
