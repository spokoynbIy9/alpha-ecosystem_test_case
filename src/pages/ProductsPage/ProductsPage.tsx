import ProductsList from "./components/ProductsList";
import useStyles from "./styles";
import FilterButton from "./components/FilterButton";
const ProductsPage = () => {
  // const classes = useStyles();
  return (
    <div>
      <FilterButton />
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
