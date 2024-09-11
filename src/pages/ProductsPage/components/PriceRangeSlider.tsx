import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPriceRange } from "../../../redux/productsSlice";
import { useMemo } from "react";
import Slider from "@mui/material/Slider";
import { setCurrentPage } from "../../../redux/productsSlice";
const PriceRangeSlider = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const priceRange = useAppSelector(
    (state) => state.products.filters.priceRange
  );

  const [minPrice, maxPrice] = useMemo(() => {
    if (products.length === 0) return [0, 100];
    const prices = products.map((product) => product.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, [products]);

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      dispatch(setPriceRange({ min: value[0], max: value[1] }));
      dispatch(setCurrentPage(1));
    }
  };

  const marks = [
    { value: minPrice, label: `$${minPrice}` },
    { value: maxPrice, label: `$${maxPrice}` },
  ];
  return (
    <Slider
      min={minPrice}
      max={maxPrice}
      value={[priceRange.min, priceRange.max]}
      step={1}
      valueLabelDisplay="auto"
      onChange={handleSliderChange}
      marks={marks}
    />
  );
};

export default PriceRangeSlider;
