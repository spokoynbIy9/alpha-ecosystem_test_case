import { useAppDispatch } from "../../../redux/hooks";
import { setSearchQuery } from "../../../redux/productsSlice";
import { debounce } from "../../../utils/debounce";
import { setCurrentPage } from "../../../redux/productsSlice";
import useStyles from "../styles";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(setCurrentPage(1));
  }, 500);
  const classes = useStyles();
  return (
    <input
      className={classes.search_input}
      type="text"
      placeholder="Search products by title"
      name="searchInput"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
