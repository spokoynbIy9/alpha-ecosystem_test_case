import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductById } from "../types/productById";
import axios from "axios";
import { RootState } from "./store";
import { isEmptyObject } from "../utils/isEmptyObject";
import { create } from "@mui/material/styles/createTransitions";
const initialState: ProductById = {
  productInfo: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
  },
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk<
  ProductById["productInfo"],
  number,
  { state: RootState }
>("productById/fetchProductById", async (id, { getState }) => {
  const state = getState();
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  if (isEmptyObject(response.data)) {
    const localProduct = state.products.products.find(
      (product) => product.id === id
    );
    return localProduct;
  } else {
    return response.data;
  }
});

const productByIdSlice = createSlice({
  name: "productById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});
export default productByIdSlice.reducer;
