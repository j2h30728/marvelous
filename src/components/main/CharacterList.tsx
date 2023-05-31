import { CharaterItems, Loader } from "..";
import { API_LIST_URL } from "../../api";
import useFetch from "../../hooks/useFetch";

const CharaterList = () => {
  const { isLoading, data: list } = useFetch(API_LIST_URL);
  return isLoading ? (
    <Loader.List>Loading...</Loader.List>
  ) : (
    <CharaterItems list={list} />
  );
};

export default CharaterList;
