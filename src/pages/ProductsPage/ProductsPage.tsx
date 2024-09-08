import ProductsList from "./components/ProductsList";
import useStyles from "./styles";
import FilterButton from "./components/FilterButton";
import { Link } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import PriceRangeSlider from "./components/PriceRangeSlider";
const ProductsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.productsPage_container}>
      <div>
        <FilterButton />
        <Link to="/create-product">Перейти к созданию</Link>
        <SearchInput />
        <PriceRangeSlider />
      </div>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
