import { Product } from "./products";

export type ProductById = {
  productInfo: Product;
  loading: boolean;
  error: null | string;
};

export type ProductInfoProps = {
  productId: number;
};
