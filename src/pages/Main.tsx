import useGetList from "../hooks/useGetList";
import makeImagePathname from "../utils/makeImagePathname";

import * as S from "./style";

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
              bgphoto={makeImagePathname(
                char.thumbnail.path,
                char.thumbnail.extension
              )}>
              <S.CharaterName>{char.name}</S.CharaterName>
            </S.Charater>
          ))}
        </S.CharacterWrapper>
      )}
    </S.Container>
  );
}
