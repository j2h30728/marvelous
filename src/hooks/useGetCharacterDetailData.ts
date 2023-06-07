import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { API_URL } from "../api";

const useGetCharacterDetailData = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`${API_URL.FETCH_CHARACTER_LIST}/${id}`);
  const detail = data[0];
  return { detail, isLoading };
};

export default useGetCharacterDetailData;
