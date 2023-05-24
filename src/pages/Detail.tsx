import { useLocation } from "react-router-dom";
import DetailItems from "../components/DetailItems";
import makeImagePathname from "../utils/makeImagePathname";
import { Character } from "../types/types";

import * as S from "./style";
import useGetDetail from "../hooks/useGetDetail";

export default function Detail() {
  const { state } = useLocation() as { state: Character };
  const { isLoading, detail } = useGetDetail();

  return (
    <S.Container>
      <S.DetailTitle>{detail?.name || state.name}</S.DetailTitle>
      <S.DetailContainer>
        <S.ImgWrapper>
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
                <S.UrlItem key={url.url + idx} href={url.url}>
                  {`${url.type} 으로 이동하기`}
                </S.UrlItem>
              ))}
            />
          )}
        </S.ImgWrapper>
        <S.DetailContents>
          {isLoading ? (
            <S.Loader>Loading...</S.Loader>
          ) : (
            <>
              <DetailItems
                title={`series (${detail?.series.available})`}
                items={detail?.series.items.map((item, idx) => (
                  <S.DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </S.DeatilItem>
                ))}
              />
              <DetailItems
                title={`stories (${detail?.stories.available})`}
                items={detail?.stories.items.map((item, idx) => (
                  <S.DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </S.DeatilItem>
                ))}
              />
            </>
          )}
        </S.DetailContents>
      </S.DetailContainer>
    </S.Container>
  );
}
