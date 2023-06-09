import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { API_URL } from "../api";
import { Character } from "../types/character";

const useGetCharacterDetailData = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<Array<Character>>(
    `${API_URL.FETCH_CHARACTER}${id}`
  );
  const characterDetailData = data?.[0];
  return { characterDetailData, isLoading, error };
};

export default useGetCharacterDetailData;
