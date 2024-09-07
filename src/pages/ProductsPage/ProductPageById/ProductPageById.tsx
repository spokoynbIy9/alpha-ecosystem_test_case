import { useParams } from "react-router-dom";

import ProductInfo from "./components/ProductInfo";
import BackButton from "./components/BackButton";
const ProductPageById = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductInfo productId={Number(id)} />
      <BackButton />
    </div>
  );
};

export default ProductPageById;
