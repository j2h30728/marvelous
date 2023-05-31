import { useLocation } from "react-router-dom";
import { Character } from "../types/Charater";
import useGetDetail from "../hooks/useGetDetail";
import Loader from "../components/common/Loder";
import CharaterImg from "../components/common/CharaterImg";
import Container from "../components/common/Container";
import DetailContents from "../components/detail/DetailContents";
import { Title } from "../components";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetDetail();

  return (
    <Container>
      <Title.DetailContents>{detail?.name || state.name}</Title.DetailContents>
      <Container.Image>
        <CharaterImg char={state || detail} />
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
