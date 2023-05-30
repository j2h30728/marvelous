import styled from "styled-components";
import Loader from "../components/Loder";
import useGetList from "../hooks/useGetList";
import makeImagePathname from "../utils/makeImagePathname";

import { Link } from "react-router-dom";

export default function Main() {
  const { isLoading, list } = useGetList();

  return (
    <Container>
      {isLoading ? (
        <Loader.List>Loading...</Loader.List>
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

const Container = styled.div`
  width: 100%;
  height: 800px;
`;

const Charater = styled(Link)<{ bgphoto: string }>`
  display: flex;
  justify-content: start;
  text-decoration: none;
  border: 1px solid gray;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.bgphoto});
  background-size: cover;
  background-position: left center;
`;

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const CharaterName = styled.span`
  font-size: 30px;
  color: white;
  margin: 15px;
  text-shadow: 2px 2px 8px red;
`;
