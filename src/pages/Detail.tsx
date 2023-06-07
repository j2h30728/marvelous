import { useLocation } from "react-router-dom";
import { Character } from "../types/Charater";
import useGetCharacterDetailData from "../hooks/useGetCharacterDetailData";
import { CharaterImage, DetailContents, Loader, Title } from "../components";
import makeImagePathname from "../utils/makeImagePathname";
import styled from "styled-components";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetCharacterDetailData();

  return (
    <Container>
      <Title.DetailContents>{detail?.name || state.name}</Title.DetailContents>
      <ImageContainer>
        <CharaterImage
          imagePathname={
            makeImagePathname(
              state.thumbnail.path,
              state.thumbnail.extension
            ) ||
            makeImagePathname(detail.thumbnail.path, detail.thumbnail.extension)
          }></CharaterImage>
      </ImageContainer>
      <DetailContentsContainer>
        {isLoading ? (
          <Loader.Detail>Loading...</Loader.Detail>
        ) : (
          <DetailContents detail={detail} />
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
