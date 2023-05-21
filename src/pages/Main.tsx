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
    </S.Container>
  );
}
