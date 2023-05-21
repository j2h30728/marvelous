import { useEffect, useState } from "react";
import { Character, get } from "../api/api";
import ApiUrl from "../api/ApiUrl";
import { useLocation, useParams } from "react-router-dom";
import DetailItems from "../components/DetailItems";

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
        <img
          src={
            detail
              ? `${detail?.thumbnail.path}.${detail?.thumbnail.extension}`
              : `${state.thumbnail.path}.${state.thumbnail.extension}`
          }
        />
        <S.DetailContents>
          {!detail ? (
            <S.Loader>Loading...</S.Loader>
          ) : (
            <>
              <DetailItems
                title="series"
                items={detail?.series.items.map((item, idx) => (
                  <S.DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </S.DeatilItem>
                ))}
              />
              <DetailItems
                title="stories"
                items={detail?.stories.items.map((item, idx) => (
                  <S.DeatilItem key={item.resourceURI + idx}>
                    {item.name}
                  </S.DeatilItem>
                ))}
              />
              <DetailItems
                title="urls"
                items={detail?.urls.map((url, idx) => (
                  <S.UrlItem key={url.url + idx} href={url.url}>
                    {`${url.type} 으로 이동하기`}
                  </S.UrlItem>
                ))}
              />
            </>
          )}
        </S.DetailContents>
      </S.DetailContainer>
    </S.Container>
  );
}
