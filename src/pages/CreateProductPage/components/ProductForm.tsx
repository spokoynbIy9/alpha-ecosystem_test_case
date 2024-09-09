import { useEffect, useState } from "react";
import useStyles from "../styles";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
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
      setIsProductAdded(true);
      setNewProduct({ id: 0, title: "", price: 0, description: "", image: "" });
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewProduct();
  };
  useEffect(() => {
    if (isProductAdded) {
      navigate(-1);
      setIsProductAdded(false);
    }
  }, [isProductAdded, navigate]);
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
      <input
        type="text"
        name="image"
        placeholder="image"
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ProductForm;
