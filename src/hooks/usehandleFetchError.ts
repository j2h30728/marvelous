import { useNavigate } from "react-router-dom";

const useHandleFetchError = () => {
  const navigate = useNavigate();
  const handleFetchError = (error: Error) => {
    alert(error.message);
    navigate("/error");
  };
  return handleFetchError;
};
export default useHandleFetchError;
