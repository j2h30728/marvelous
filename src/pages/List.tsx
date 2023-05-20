import { useEffect, useState } from "react";
import { Character, get } from "../api/api";
import ApiUrl from "../api/ApiUrl";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as S from "./style";

export default function List() {
  const [list, setList] = useState<Array<Character>>([]);
  const [imgs, setImgs] = useState<Array<Character>>([]);

  useEffect(() => {
    (async () => {
      const result: Array<Character> | undefined = await get(ApiUrl.list);
      result && setList(result);
    })();
  }, []);

  useEffect(() => {
    setImgs(
      list.filter(char =>
        Boolean(!char.thumbnail.path.includes("image_not_available"))
      )
    );
  }, [list]);

  return (
    <S.Container>
      <ImageWrapper>
        {imgs.map(img => (
          <img
            key={img.thumbnail.path}
            width={100}
            src={`${img.thumbnail.path}.${img.thumbnail.extension}`}
          />
        ))}
      </ImageWrapper>
      <S.CharacterWrapper>
        {list.map(char => (
          <S.Charater
            to={`/character/${char.id}`}
            key={char.id}
            state={char}
            bgphoto={`${char.thumbnail.path}.${char.thumbnail.extension}`}>
            <S.CharaterName>{char.name}</S.CharaterName>
          </S.Charater>
        ))}
      </S.CharacterWrapper>
    </S.Container>
  );
}
const ImageWrapper = styled.div``;
