import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../../../redux/productByIdSlice";
import { ProductInfoProps } from "../../../../types/productById";
import useStyles from "../styles";
import { Product } from "../../../../types/products";
import {
  updateProductPatch,
  updateProductPut,
} from "../../../../redux/productsSlice";
const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { productInfo } = useAppSelector((state) => state.productById);
  const [updatedProduct, setUpdatedProduct] = useState<Partial<Product>>({
    id: productId,
  });
  const [successMessage, setSuccesMessage] = useState("");
  const classes = useStyles();
  const isAllFieldsUpdated = (original: Product, updated: Partial<Product>) => {
    const fields: (keyof Product)[] = [
      "title",
      "price",
      "description",
      "image",
    ];
    return fields.every((field) => original[field] !== updated[field]);
  };
  const editProduct = async () => {
    try {
      const usePut = isAllFieldsUpdated(productInfo, updatedProduct);
      if (usePut) {
        await dispatch(
          updateProductPut({ productId, updatedData: updatedProduct })
        );
      } else {
        await dispatch(
          updateProductPatch({ productId, updatedData: updatedProduct })
        );
      }
      dispatch(fetchProductById(productId));
      setSuccesMessage("You have just updated the product info.");
    } catch (error) {
      setSuccesMessage("Failed to update the product info.");
    }
  };
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccesMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);
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
        <div className={classes.editor_container}>
          <h3 className={classes.editor_title}>Editor</h3>
          <input
            className={classes.editor_input}
            type="text"
            placeholder="New img"
            value={updatedProduct.image || productInfo.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />
          <input
            className={classes.editor_input}
            type="text"
            placeholder="New title"
            value={updatedProduct.title || productInfo.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
          />
          <input
            className={classes.editor_input}
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
            className={classes.editor_input}
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
          <button className={classes.editor_button} onClick={editProduct}>
            Edit Product
          </button>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
