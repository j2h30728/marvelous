import useGetList from "../hooks/useGetList";
import makeImagePathname from "../utils/makeImagePathname";

import {
  Container,
  LoaderWrapper,
  Loader,
  Charater,
  CharacterWrapper,
  CharaterName,
} from "./style";

export default function Main() {
  const { isLoading, list } = useGetList();

  return (
    <Container>
      {isLoading ? (
        <LoaderWrapper>
          <Loader>Loading...</Loader>
        </LoaderWrapper>
      ) : (
        <CharacterWrapper>
          {list.map(char => (
            <Charater
              to={`/character/${char.id}`}
              key={char.id}
              state={char}
              bgphoto={makeImagePathname(
                char.thumbnail.path,
                char.thumbnail.extension
              )}>
              <CharaterName>{char.name}</CharaterName>
            </Charater>
          ))}
        </CharacterWrapper>
      )}
    </Container>
  );
}
