import styled from "styled-components";

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
        <Loader.List>Loading...</Loader.List>
      ) : (
        <CharaterItems charaterList={charaterListData} />
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
