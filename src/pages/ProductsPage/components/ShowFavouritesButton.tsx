import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleShowFavorites } from "../../../redux/productsSlice";
import useStyles from "../styles";
const ShowFavouritesButton = () => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.products.favorites);

  const handleToggleView = () => {
    dispatch(toggleShowFavorites());
  };
  const classes = useStyles();
  return (
    <button className={classes.filterButton} onClick={handleToggleView}>
      {show ? "Show All Products" : "Show Favorites"}
    </button>
  );
};

export default ShowFavouritesButton;
