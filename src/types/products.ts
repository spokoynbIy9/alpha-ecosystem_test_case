export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type FavoritesState = {
  ids: number[];
  show: boolean;
};

export type ProductsState = {
  products: Product[];
  favorites: FavoritesState;
  loading: boolean;
  error: string | null;
};

export type FilterButtonProps = {
  handleToggleView: () => void;
  isShowFavor: boolean;
};
