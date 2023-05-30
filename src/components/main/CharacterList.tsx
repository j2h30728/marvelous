import useGetList from "../../hooks/useGetList";
import Loader from "../Loder";
import CharaterItems from "./CharaterItems";

const CharaterList = () => {
  const { isLoading, list } = useGetList();
  return isLoading ? (
    <Loader.List>Loading...</Loader.List>
  ) : (
    <CharaterItems list={list} />
  );
};

export default CharaterList;
