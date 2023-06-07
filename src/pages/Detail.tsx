import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Character } from "../types/charater";
import useGetCharacterDetailData from "../hooks/useGetCharacterDetailData";
import { CharaterImage, DetailContents, Loader, Title } from "../components";
import makeImagePathname from "../utils/makeImagePathname";
import useHandleFetchError from "../hooks/usehandleFetchError";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const handleFetchError = useHandleFetchError();
  const { isLoading, characterDetailData, error } = useGetCharacterDetailData();
  if (error) {
    handleFetchError(error);
  }
  return (
    <Container>
      <Title.DetailContents>
        {state.name || characterDetailData?.name}
      </Title.DetailContents>
      <DetailContentsContainer>
        {isLoading && <Loader.Detail>Loading...</Loader.Detail>}
        {characterDetailData && (
          <>
            <ImageContainer>
              <CharaterImage
                imagePathname={makeImagePathname(
                  characterDetailData.thumbnail.path,
                  characterDetailData.thumbnail.extension
                )}></CharaterImage>
            </ImageContainer>
            <DetailContents characterDetailData={characterDetailData} />
          </>
        )}
      </DetailContentsContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetailContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
