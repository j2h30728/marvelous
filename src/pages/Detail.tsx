import { useLocation } from "react-router-dom";
import DetailItems from "../components/detail/DetailItems";
import { Character } from "../types/Charater";
import useGetDetail from "../hooks/useGetDetail";
import styled from "styled-components";
import Loader from "../components/common/Loder";
import CharaterImg from "../components/common/CharaterImg";
import DetailItem from "../components/detail/DetailItem";
import Container from "../components/common/Container";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetDetail();

  return (
    <Container>
      <DetailTitle>{detail?.name || state.name}</DetailTitle>
      <Container.Image>
        <CharaterImg char={state || detail} />
      </Container.Image>
      <Container.DetailContents>
        {isLoading ? (
          <Loader.Detail>Loading...</Loader.Detail>
        ) : (
          <>
            <DetailItems
              title="urls"
              items={detail?.urls.map((url, idx) => (
                <DetailItem.Url
                  item={`${url.type} 으로 이동하기`}
                  url={url.url}
                  key={url.url + idx}
                />
              ))}
            />
            <DetailItems
              title={`series (${detail?.series.available})`}
              items={detail?.series.items.map((item, idx) => (
                <DetailItem item={item.name} key={item.resourceURI + idx} />
              ))}
            />
            <DetailItems
              title={`stories (${detail?.stories.available})`}
              items={detail?.stories.items.map((item, idx) => (
                <DetailItem item={item.name} key={item.resourceURI + idx} />
              ))}
            />
          </>
        )}
      </Container.DetailContents>
    </Container>
  );
}

const DetailTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  background-color: #333;
  border-top: 1px solid white;
  color: white;
  margin: 0 0 30px;
  padding: 8px 0;
`;
