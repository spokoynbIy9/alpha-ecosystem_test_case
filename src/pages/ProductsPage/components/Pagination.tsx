import { PaginationProps } from "../../../types/products";
import useStyles from "../styles";
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [...Array(totalPages)].map((_, idx) => idx + 1);
  const classes = useStyles();
  return (
    <div className={classes.paginationContainer}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          disabled={number === currentPage}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
