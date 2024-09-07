import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleShowFavorites } from "../../../redux/productsSlice";
const FilterButton = () => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.products.favorites);
  const handleToggleView = () => {
    dispatch(toggleShowFavorites());
  };
  return (
    <button onClick={handleToggleView}>
      {show ? "Show All Products" : "Show Favorites"}
    </button>
  );
};

export default FilterButton;
