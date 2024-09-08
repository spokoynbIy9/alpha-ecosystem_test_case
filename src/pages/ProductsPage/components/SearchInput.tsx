import { useCallback } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setSearchQuery } from "../../../redux/productsSlice";
import { debounce } from "../../../utils/debounce";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
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
