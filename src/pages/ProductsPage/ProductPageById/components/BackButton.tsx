import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const ComeBack = () => {
    navigate(-1);
  };
  return <button onClick={ComeBack}>Назад</button>;
};

export default BackButton;
