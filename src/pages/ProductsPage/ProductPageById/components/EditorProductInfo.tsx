import React from "react";
import useStyles from "../styles";
import { useState, useEffect } from "react";
import { Product } from "../../../../types/products";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  updateProductPatch,
  updateProductPut,
} from "../../../../redux/productsSlice";
import { fetchProductById } from "../../../../redux/productByIdSlice";
import { EditorProductInfoProps } from "../../../../types/productById";

const EditorProductInfo: React.FC<EditorProductInfoProps> = ({ productId }) => {
  const classes = useStyles();
  const [updatedProduct, setUpdatedProduct] = useState<Partial<Product>>({
    id: productId,
  });
  const [successMessage, setSuccesMessage] = useState("");
  const dispatch = useAppDispatch();
  const { productInfo } = useAppSelector((state) => state.productById);

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
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccesMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);
  return (
    <div className={classes.editor_container}>
      <h3 className={classes.editor_title}>Editor</h3>
      <input
        name="newImg"
        className={classes.editor_input}
        type="text"
        placeholder="New img"
        value={
          updatedProduct.image !== undefined
            ? updatedProduct.image
            : productInfo.image
        }
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, image: e.target.value })
        }
      />
      <input
        name="newTitle"
        className={classes.editor_input}
        type="text"
        placeholder="New title"
        value={
          updatedProduct.title !== undefined
            ? updatedProduct.title
            : productInfo.title
        }
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, title: e.target.value })
        }
      />
      <input
        name="newDesc"
        className={classes.editor_input}
        type="text"
        placeholder="New description"
        value={
          updatedProduct.description !== undefined
            ? updatedProduct.description
            : productInfo.description
        }
        onChange={(e) =>
          setUpdatedProduct({
            ...updatedProduct,
            description: e.target.value,
          })
        }
      />
      <input
        name="newPrice"
        className={classes.editor_input}
        type="number"
        placeholder="New price"
        value={
          updatedProduct.price !== undefined
            ? updatedProduct.price
            : productInfo.price
        }
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
  );
};

export default EditorProductInfo;
