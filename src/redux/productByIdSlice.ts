import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductById } from "../types/productById";
import axios from "axios";
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
  number
>("productById/fetchProductById", async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
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
