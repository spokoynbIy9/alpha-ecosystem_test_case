import { useParams } from "react-router-dom";

import ProductInfo from "./components/ProductInfo";
import BackButton from "./components/BackButton";
import useStyles from "./styles";
const ProductPageById = () => {
  const classes = useStyles();
  const { id } = useParams();
  const productId = Number(id);
  return (
    <div className={classes.productPage_container}>
      <BackButton />
      <ProductInfo productId={productId} />
    </div>
  );
};

export default ProductPageById;
