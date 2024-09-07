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
    gap: "20px",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  productElement: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    border: "1px solid #000",
    padding: "15px",
    cursor: "pointer",
  },
  productDesc: truncateText(2),
  productTitle: truncateText(1),
});

export default useStyles;
