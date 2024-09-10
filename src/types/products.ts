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
  filters: {
    searchQuery: string;
    priceRange: {
      min: number;
      max: number;
    };
  };
  pagination: {
    currentPage: number;
    productsPerPage: number;
  };
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
