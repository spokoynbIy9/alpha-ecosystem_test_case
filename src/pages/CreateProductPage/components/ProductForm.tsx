import { useEffect, useState } from "react";
import useStyles from "../styles";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };
  const classes = useStyles();
  const addNewProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct
      );
      const updatedProduct = { ...newProduct, id: data.id * Date.now() };

      dispatch(addProduct(updatedProduct));
      navigate(-1);

      setNewProduct({ id: 0, title: "", price: 0, description: "" });
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewProduct();
  };
  return (
    <form onSubmit={handleSubmit} className={classes.productForm}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="desc"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={handleChange}
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ProductForm;
