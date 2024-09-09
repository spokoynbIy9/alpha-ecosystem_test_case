import { useNavigate } from "react-router-dom";
import useStyles from "../styles";

const BackButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const ComeBack = () => {
    navigate(-1);
  };
  return (
    <button className={classes.backButton} onClick={ComeBack}>
      Back
    </button>
  );
};

export default BackButton;
