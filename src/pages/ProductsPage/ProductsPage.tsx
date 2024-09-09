import ProductsList from "./components/ProductsList";
import useStyles from "./styles";
import FilterButton from "./components/ShowFavouritesButton";
import { Link } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import PriceRangeSlider from "./components/PriceRangeSlider";
const ProductsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.productsPage_container}>
      <div className={classes.filtersContainer}>
        <Link to="/create-product" className={classes.filterButton}>
          Make Product
        </Link>
        <FilterButton />
      </div>
      <div>
        <SearchInput />
        <PriceRangeSlider />
      </div>
      <div className={classes.productsList_container}>
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
