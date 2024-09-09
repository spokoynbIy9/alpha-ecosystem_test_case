import { useEffect, useState } from "react";
import useStyles from "../styles";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isProductAdded, setIsProductAdded] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters")
      .required("Title is required"),
    price: Yup.number()
      .min(1, "Price must be greater than 0")
      .required("Price is required"),
    description: Yup.string()
      .min(5, "Description must be at least 5 characters")
      .required("Description is required"),
    category: Yup.string()
      .min(3, "Category must be at least 3 characters")
      .required("Category is required"),
    image: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          "https://fakestoreapi.com/products",
          values
        );
        const updatedProduct = { ...values, id: data.id * Date.now() };

        dispatch(addProduct(updatedProduct));
        setIsProductAdded(true);
      } catch (error) {
        console.error("Error adding product", error);
      }
    },
  });
  useEffect(() => {
    if (isProductAdded) {
      navigate(-1);
      setIsProductAdded(false);
    }
  }, [isProductAdded, navigate]);
  const classes = useStyles();
  return (
    <form onSubmit={formik.handleSubmit} className={classes.productForm}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        className={classes.inputField}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className={classes.errorMessage}>{formik.errors.title}</div>
      ) : null}

      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
        className={classes.inputField}
      />
      {formik.touched.price && formik.errors.price ? (
        <div className={classes.errorMessage}>{formik.errors.price}</div>
      ) : null}

      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        className={classes.inputField}
      />
      {formik.touched.description && formik.errors.description ? (
        <div className={classes.errorMessage}>{formik.errors.description}</div>
      ) : null}

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
        className={classes.inputField}
      />
      {formik.touched.category && formik.errors.category ? (
        <div className={classes.errorMessage}>{formik.errors.category}</div>
      ) : null}

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
        className={classes.inputField}
      />
      {formik.touched.image && formik.errors.image ? (
        <div className={classes.errorMessage}>{formik.errors.image}</div>
      ) : null}

      <button className={classes.submitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default ProductForm;
