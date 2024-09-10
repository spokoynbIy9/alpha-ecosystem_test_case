import { useCallback } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setSearchQuery } from "../../../redux/productsSlice";
import { debounce } from "../../../utils/debounce";
import { setCurrentPage } from "../../../redux/productsSlice";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(setCurrentPage(1));
  }, 500);

  return (
    <input
      type="text"
      placeholder="Search products by title"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
