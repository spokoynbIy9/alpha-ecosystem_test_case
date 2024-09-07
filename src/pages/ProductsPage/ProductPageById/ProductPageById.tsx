import { useParams } from "react-router-dom";

const ProductPageById = () => {
  const { id } = useParams();
  return <div>ProductPageById {id}</div>;
};

export default ProductPageById;
