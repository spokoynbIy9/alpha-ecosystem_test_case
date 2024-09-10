import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  "@global": {
    p: {
      margin: 0,
    },
    h3: {
      margin: 0,
    },
  },
  productCard_container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "20px",
    margin: "10px",
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
    backgroundColor: "#f5f5f5",
    padding: "20px",
    marginBottom: "15px",
    textAlign: "center",
  },
  productInfo_title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "10px",
  },
  productInfo_description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "10px",
  },
  productInfo_image: {
    width: "100%",
    height: "auto",
  },
  productInfo_price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#000",
  },
  editor_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  editor_title: {
    fontSize: "1.6rem",
    color: "#444",
    marginBottom: "10px",
  },
  editor_input: {
    display: "block",
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  editor_button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  successMessage: {
    color: "green",
    marginTop: "10px",
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
