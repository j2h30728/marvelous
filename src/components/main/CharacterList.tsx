import { CharaterItems, Loader } from "..";
import useGetList from "../../hooks/useGetList";

const CharaterList = () => {
  const { isLoading, list } = useGetList();
  return isLoading ? (
    <Loader.List>Loading...</Loader.List>
  ) : (
    <CharaterItems list={list} />
  );
};

export default CharaterList;
