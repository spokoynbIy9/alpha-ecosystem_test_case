import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../../../redux/productByIdSlice";
import { ProductInfoProps } from "../../../../types/productById";
import useStyles from "../styles";
import { Product } from "../../../../types/products";
import { updateProduct } from "../../../../redux/productsSlice";
const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { productInfo } = useAppSelector((state) => state.productById);
  const [updatedProduct, setUpdatedProduct] = useState<Partial<Product>>({});
  const [successMessage, setSuccesMessage] = useState("");
  const classes = useStyles();
  const editProduct = async () => {
    try {
      await dispatch(updateProduct({ productId, updatedData: updatedProduct }));
      dispatch(fetchProductById(productId));
      setSuccesMessage("You have just updated the product info.");
    } catch (error) {
      setSuccesMessage("Failed to update the product info.");
    }
  };
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);
  return (
    <div className={classes.productCard_container}>
      <img src={productInfo.image} alt="" />
      <div className={classes.productInfoAndEdit_container}>
        <div className={classes.productInfo_container}>
          <h3>{productInfo.title}</h3>
          <p>{productInfo.description}</p>
          <span>{productInfo.price}</span>
        </div>
        <div className={classes.editor_container}>
          <h3>Editor</h3>
          <input
            type="text"
            placeholder="New img"
            value={updatedProduct.image || productInfo.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="New title"
            value={updatedProduct.title || productInfo.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="New description"
            value={updatedProduct.description || productInfo.description}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                description: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="New price"
            value={updatedProduct.price || productInfo.price}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                price: Number(e.target.value),
              })
            }
          />
          <button onClick={editProduct}>Edit Product</button>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
