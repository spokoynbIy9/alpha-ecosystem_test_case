import { makeStyles } from "@mui/styles";
const truncateText = (lines: number) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
});
const useStyles = makeStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
    },
  },
  productButton: {
    backgroundColor: "inherit",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    padding: 0,
    display: "flex",
    "&:hover": {
      border: "1px solid #ff0000",
    },
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "20px",
    columnGap: "10px",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  productsList_container: {
    gridColumn: "1 / 3",
  },
  productElement: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    border: "1px solid #000",
    padding: "15px",
    cursor: "pointer",
  },
  productDesc: truncateText(2),
  productTitle: truncateText(1),
  productsPage_container: {
    maxWidth: "1240px",
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridTemplateRows: "auto auto",
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    fontFamily: "Segoe UI",
    fontSize: "16px",
    color: "#333",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontWeight: "bold",
    transition: "background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d9d9d9",
      color: "#111",
    },
  },
  filtersContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
});

export default useStyles;
