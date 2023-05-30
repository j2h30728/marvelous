import { useLocation } from "react-router-dom";
import DetailItems from "../components/DetailItems";
import makeImagePathname from "../utils/makeImagePathname";
import { Character } from "../types/types";
import useGetDetail from "../hooks/useGetDetail";
import Loader from "../components/Loder";
import styled from "styled-components";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetDetail();

  return (
    <Container>
      <DetailTitle>{detail?.name || state.name}</DetailTitle>
      <DetailContainer>
        <ImgWrapper>
          <img
            src={
              detail
                ? makeImagePathname(
                    detail?.thumbnail.path,
                    detail?.thumbnail.extension
                  )
                : makeImagePathname(
                    state.thumbnail.path,
                    state.thumbnail.extension
                  )
            }
          />
          {!isLoading && (
            <DetailItems
              title="urls"
              items={detail?.urls.map((url, idx) => (
                <UrlItem key={url.url + idx} href={url.url}>
                  {`${url.type} 으로 이동하기`}
                </UrlItem>
              ))}
            />
          )}
        </ImgWrapper>
        <DetailContents>
          {isLoading ? (
            <Loader.Detail>Loading...</Loader.Detail>
          ) : (
            <>
              <DetailItems
                title={`series (${detail?.series.available})`}
                items={detail?.series.items.map((item, idx) => (
                  <DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </DeatilItem>
                ))}
              />
              <DetailItems
                title={`stories (${detail?.stories.available})`}
                items={detail?.stories.items.map((item, idx) => (
                  <DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </DeatilItem>
                ))}
              />
            </>
          )}
        </DetailContents>
      </DetailContainer>
    </Container>
  );
}
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto;
    width: 350px;
    border-radius: 10px;
  }
`;

const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DeatilItem = styled.div`
  display: flex;
  padding: 3.5px 30px;
  font-size: 18px;
  font-weight: 600;

  :first-of-type {
    margin-top: 20px;
  }
`;

const UrlItem = styled.a`
  display: flex;
  margin: 10px;
  padding: 3.5px 30px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: black;
  :first-of-type {
    margin-top: 20px;
  }
`;
