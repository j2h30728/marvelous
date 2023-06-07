import { API_BASE_URL } from "../api";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const useGetCharacterDetailData = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`${API_BASE_URL}/${id}`);
  const detail = data[0];
  return { detail, isLoading };
};

export default useGetCharacterDetailData;
