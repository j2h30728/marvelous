import useGetList from "../../hooks/useGetList";
import CharaterItems from "../CharaterItems";
import Loader from "../common/Loder";

const CharaterList = () => {
  const { isLoading, list } = useGetList();
  return isLoading ? (
    <Loader.List>Loading...</Loader.List>
  ) : (
    <CharaterItems list={list} />
  );
};

export default CharaterList;
