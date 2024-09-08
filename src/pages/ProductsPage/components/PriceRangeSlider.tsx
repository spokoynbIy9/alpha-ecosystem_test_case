import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPriceRange } from "../../../redux/productsSlice";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
const PriceRangeSlider = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector(
    (state) => state.products.filters.priceRange
  );
  const handleSliderChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      dispatch(setPriceRange({ min: value[0], max: value[1] }));
    }
  };

  return (
    <Slider
      min={0}
      max={100}
      value={[priceRange.min, priceRange.max]}
      step={1}
      valueLabelDisplay="auto"
      onChange={handleSliderChange}
      marks={[
        { value: priceRange.min, label: `$${priceRange.min}` },
        { value: priceRange.max, label: `$${priceRange.max}` },
      ]}
    />
  );
};

export default PriceRangeSlider;
