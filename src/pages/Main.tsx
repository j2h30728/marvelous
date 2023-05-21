import makeImg from "../utils/makeImg";

import * as S from "./style";
import { useGetList } from "../hooks/useQuery";

export default function Main() {
  const { isLoading, list } = useGetList();

  return (
    <S.Container>
      {isLoading ? (
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
