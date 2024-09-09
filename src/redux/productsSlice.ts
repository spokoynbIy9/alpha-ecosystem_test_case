import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, Product } from "../types/products";
import axios from "axios";
const initialState: ProductsState = {
  products: [],
  favorites: {
    ids: [],
    show: false,
  },
  loading: false,
  error: null,
  filters: {
    searchQuery: "",
    priceRange: {
      min: 0,
      max: 100,
    },
  },
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    updatedData,
  }: {
    productId: number;
    updatedData: Partial<Product>;
  }) => {
    const response = await axios.patch(
      `https://fakestoreapi.com/products/${productId}`,
      updatedData
    );
    return response.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addToFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.favorites.ids.includes(productId)) {
        state.favorites.ids = state.favorites.ids.filter(
          (id) => id !== productId
        );
      } else {
        state.favorites.ids.push(productId);
      }
    },
    toggleShowFavorites: (state) => {
      state.favorites.show = !state.favorites.show;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.filters.priceRange = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          const newProducts = action.payload.filter(
            (newProduct) =>
              !state.products.some(
                (existingProduct) => existingProduct.id === newProduct.id
              )
          );
          state.products = [...state.products, ...newProducts];
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.products = state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          );
        }
      );
  },
});

export const {
  deleteProduct,
  addToFavorite,
  toggleShowFavorites,
  addProduct,
  setSearchQuery,
  setPriceRange,
} = productsSlice.actions;
export default productsSlice.reducer;
