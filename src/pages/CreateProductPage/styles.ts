import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  inputField: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    "&:focus": {
      outline: "none",
      borderColor: "#3f51b5",
    },
  },
  submitButton: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#3f51b5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#303f9f",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
});

export default useStyles;
