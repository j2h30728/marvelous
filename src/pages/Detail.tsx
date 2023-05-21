import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailItems from "../components/DetailItems";
import makeImg from "../utils/makeImg";
import { Character } from "../types/types";
import { ApiUrl, get } from "../api";

import * as S from "./style";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Character>();
  const { state } = useLocation() as { state: Character };

  useEffect(() => {
    (async () => {
      const respnse = await get(`${ApiUrl.baseUrl}/${id}`);
      respnse && setDetail(respnse[0]);
    })();
  }, [id]);

  return (
    <S.Container>
      <S.DetailTitle>{detail?.name || state.name}</S.DetailTitle>
      <S.DetailContainer>
        <S.ImgWrapper>
          <img
            src={
              detail
                ? makeImg(detail?.thumbnail.path, detail?.thumbnail.extension)
                : makeImg(state.thumbnail.path, state.thumbnail.extension)
            }
          />
          {detail && (
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
          {!detail ? (
            <S.Loader>Loading...</S.Loader>
          ) : (
            <>
              <DetailItems
                title={`series (${detail.series.available})`}
                items={detail?.series.items.map((item, idx) => (
                  <S.DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </S.DeatilItem>
                ))}
              />
              <DetailItems
                title={`stories (${detail.stories.available})`}
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
