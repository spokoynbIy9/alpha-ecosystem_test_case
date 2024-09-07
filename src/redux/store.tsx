import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import productByIdReducer from "./productByIdSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    productById: productByIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
