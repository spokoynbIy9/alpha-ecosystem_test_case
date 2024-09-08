import ProductsList from "./components/ProductsList";
import useStyles from "./styles";
import FilterButton from "./components/FilterButton";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.productsPage_container}>
      <FilterButton />
      <ProductsList />
      <Link to="/create-product">Перейти к созданию</Link>
    </div>
  );
};

export default ProductsPage;
