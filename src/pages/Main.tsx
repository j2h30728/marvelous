import { CharaterItems, Loader } from "../components";
import useGetCharacterListData from "../hooks/useGetCharacterListData";
import useHandleFetchError from "../hooks/usehandleFetchError";

export default function Main() {
  const { isLoading, charaterListData, error } = useGetCharacterListData();
  const handleFetchError = useHandleFetchError();
  if (error) {
    handleFetchError(error);
  }
  return (
    <>
      {isLoading ? (
        <Loader.CharaterList>Loading...</Loader.CharaterList>
      ) : (
        <CharaterItems charaterList={charaterListData} />
      )}
    </>
  );
}
