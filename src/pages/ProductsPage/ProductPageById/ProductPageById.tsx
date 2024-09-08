import { useParams } from "react-router-dom";

import ProductInfo from "./components/ProductInfo";
import BackButton from "./components/BackButton";
const ProductPageById = () => {
  const { id } = useParams();
  const productId = Number(id);
  return (
    <div>
      <ProductInfo productId={productId} />
      <BackButton />
    </div>
  );
};

export default ProductPageById;
