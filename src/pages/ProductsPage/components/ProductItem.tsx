import React from "react";
import { Product } from "../../../types/products";
import { useState } from "react";
import useStyles from "../styles";
import { useAppDispatch } from "../../../redux/hooks";
import { addToFavorite, deleteProduct } from "../../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isFirstSvg, setIsFirstSvg] = useState(true);
  const switchSvg = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFirstSvg((prevState) => !prevState);
    dispatch(addToFavorite(product.id));
  };
  const handleDeleteProduct = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(deleteProduct(product.id));
  };
  const moveInfoPage = () => {
    navigate(`/products/${product.id}`);
  };
  const classes = useStyles();
  return (
    <li className={classes.productElement} onClick={moveInfoPage}>
      <h3 className={classes.productTitle}>{product.title}</h3>
      <span className={classes.productDesc}>{product.description}</span>
      <div className={classes.buttonsWrapper}>
        <button onClick={switchSvg} className={classes.productButton}>
          {isFirstSvg ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7 5C14.8 5 13 5.5 12 7.1C11 5.5 9.2 5 8.2 5C5.9 5 4 6.9 4 9.2C4 13.2 11.4 17.7 11.7 17.9L12 18.1L12.3 17.9C12.6 17.7 20 13.1 20 9.2C20 6.9 18.1 5 15.7 5ZM12 16.9C9.8 15.5 5 11.9 5 9.2C5 7.4 6.5 6 8.2 6C8.3 6 10.7 6.1 11.5 8.4L12 9.8L12.5 8.4C13.3 6.1 15.7 6 15.8 6C17.5 6 19 7.4 19 9.2C19 11.9 14.2 15.5 12 16.9Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 5C16 5 13 5 12 8C11 5 8 5 8 5C5.8 5 4 6.8 4 9C4 13.1 12 18 12 18C12 18 20 13 20 9C20 6.8 18.2 5 16 5Z"
                fill="#000ff0"
                fillOpacity="0.6"
              />
            </svg>
          )}
        </button>
        <button className={classes.productButton} onClick={handleDeleteProduct}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5ZM12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4Z"
              fill="#1C2E45"
              fillOpacity="0.6"
            />
            <path
              d="M16.2 14.8L13.4 12L16.2 9.20005L14.8 7.80005L12 10.6L9.19999 7.80005L7.79999 9.20005L10.6 12L7.79999 14.8L9.19999 16.2L12 13.4L14.8 16.2L16.2 14.8Z"
              fill="#1C2E45"
              fillOpacity="0.6"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
