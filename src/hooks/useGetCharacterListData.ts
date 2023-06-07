import useFetch from "./useFetch";
import { API_URL } from "../api";
import { Character } from "../types/charater";

const useGetCharacterListData = () => {
  const {
    data: charaterListData,
    isLoading,
    error,
  } = useFetch<Array<Character>>(`${API_URL.FETCH_CHARACTER_LIST}`);
  return { charaterListData, isLoading, error };
};

export default useGetCharacterListData;
