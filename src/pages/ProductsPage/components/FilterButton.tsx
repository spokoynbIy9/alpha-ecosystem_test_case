import React from "react";
import { FilterButtonProps } from "../../../types/products";
const FilterButton: React.FC<FilterButtonProps> = ({
  handleToggleView,
  isShowFavor,
}) => {
  return (
    <button onClick={handleToggleView}>
      {isShowFavor ? "Show All Products" : "Show Favorites"}
    </button>
  );
};

export default FilterButton;
