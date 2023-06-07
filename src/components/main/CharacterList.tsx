import { CharaterItems, Loader } from "..";
import { API_URL } from "../../api";
import useFetch from "../../hooks/useFetch";

const CharaterList = () => {
  const { isLoading, data: list } = useFetch(API_URL.FETCH_CHARACTER_LIST);
  return isLoading ? (
    <Loader.List>Loading...</Loader.List>
  ) : (
    <CharaterItems list={list} />
  );
};

export default CharaterList;
