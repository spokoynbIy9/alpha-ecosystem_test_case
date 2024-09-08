import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect } from "react";
import { fetchProductById } from "../../../../redux/productByIdSlice";
import { ProductInfoProps } from "../../../../types/productById";
const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { productInfo } = useAppSelector((state) => state.productById);
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);
  return (
    <div>
      <h3>{productInfo.id}</h3>
    </div>
  );
};

export default ProductInfo;
