import { useLocation } from "react-router-dom";
import { Character } from "../types/Charater";
import useGetCharacterDetailData from "../hooks/useGetCharacterDetailData";
import {
  CharaterImg,
  Container,
  DetailContents,
  Loader,
  Title,
} from "../components";
import makeImagePathname from "../utils/makeImagePathname";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetCharacterDetailData();

  return (
    <Container>
      <Title.DetailContents>{detail?.name || state.name}</Title.DetailContents>
      <Container.Image>
        <CharaterImg
          imagePathname={
            makeImagePathname(
              state.thumbnail.path,
              state.thumbnail.extension
            ) ||
            makeImagePathname(detail.thumbnail.path, detail.thumbnail.extension)
          }></CharaterImg>
      </Container.Image>
      <Container.DetailContents>
        {isLoading ? (
          <Loader.Detail>Loading...</Loader.Detail>
        ) : (
          <DetailContents detail={detail} />
        )}
      </Container.DetailContents>
    </Container>
  );
}
