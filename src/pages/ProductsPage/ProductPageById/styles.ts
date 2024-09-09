import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productCard_container: {
    display: "grid",
    gridTemplateColumns: "repeat (2, 1fr)",
  },
  productPage_container: {
    maxWidth: "1240px",
    margin: "20px auto",
    display: "grid",
    gridTemplateRows: "auto auto",
  },
  productInfoAndEdit_container: {
    gridColumn: "2",
  },
  productInfo_container: {
    marginBottom: "15px",
    textAlign: "center",
  },
  editor_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backButton: {
    justifySelf: "center",
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
});

export default useStyles;
