import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect } from "react";
import { fetchProductById } from "../../../../redux/productByIdSlice";
import { ProductInfoProps } from "../../../../types/productById";
import useStyles from "../styles";
import EditorProductInfo from "./EditorProductInfo";

const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { productInfo } = useAppSelector((state) => state.productById);

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <div className={classes.productCard_container}>
      <img
        className={classes.productInfo_image}
        src={productInfo.image}
        alt=""
      />
      <div className={classes.productInfoAndEdit_container}>
        <div className={classes.productInfo_container}>
          <h3 className={classes.productInfo_title}>{productInfo.title}</h3>
          <p className={classes.productInfo_description}>
            {productInfo.description}
          </p>
          <span className={classes.productInfo_price}>
            {productInfo.price} $
          </span>
        </div>
        <EditorProductInfo productId={productId} />
      </div>
    </div>
  );
};

export default ProductInfo;
