import { useLocation } from "react-router-dom";
import DetailItems from "../components/DetailItems";
import makeImagePathname from "../utils/makeImagePathname";
import { Character } from "../types/types";
import useGetDetail from "../hooks/useGetDetail";

import {
  Container,
  DetailTitle,
  DetailContainer,
  ImgWrapper,
  DetailContents,
  UrlItem,
  DeatilItem,
  Loader,
} from "./style";

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
            <Loader>Loading...</Loader>
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
