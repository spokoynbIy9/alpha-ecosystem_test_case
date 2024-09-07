import { useState } from "react";
import useStyles from "../styles";
const ProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };
  const classes = useStyles();
  return (
    <form className={classes.productForm}>
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
      <button>Отправить</button>
    </form>
  );
};

export default ProductForm;
