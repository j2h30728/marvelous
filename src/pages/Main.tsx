import { useEffect, useState } from "react";
import { ApiUrl, get } from "../api";
import makeImg from "../utils/makeImg";
import { Character } from "../types/types";

import * as S from "./style";

export default function Main() {
  const [list, setList] = useState<Array<Character>>([]);

  useEffect(() => {
    (async () => {
      const result: Array<Character> | undefined = await get(ApiUrl.list);
      result && setList(result);
    })();
  }, []);

  return (
    <S.Container>
      {list.length === 0 ? (
        <S.LoaderWrapper>
          <S.Loader>Loading...</S.Loader>
        </S.LoaderWrapper>
      ) : (
        <S.CharacterWrapper>
          {list.map(char => (
            <S.Charater
              to={`/character/${char.id}`}
              key={char.id}
              state={char}
              bgphoto={makeImg(char.thumbnail.path, char.thumbnail.extension)}>
              <S.CharaterName>{char.name}</S.CharaterName>
            </S.Charater>
          ))}
        </S.CharacterWrapper>
      )}
    </S.Container>
  );
}
