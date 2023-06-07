import styled from "styled-components";
import { Character } from "../../types/Charater";
import { CharaterImg } from "..";
import makeImagePathname from "../../utils/makeImagePathname";
import { Link } from "react-router-dom";

interface CharaterItemsProps {
  list: Array<Character>;
}

const CharaterItems = ({ list }: CharaterItemsProps) => {
  return (
    <CharactersWrapper>
      {list.map(character => (
        <CharacterWrapper
          key={character.id}
          to={`/character/${character.id}`}
          state={character}>
          <CharaterImg.MainItem
            imagePathname={makeImagePathname(
              character.thumbnail.path,
              character.thumbnail.extension
            )}>
            <CharaterName>{character.name}</CharaterName>
          </CharaterImg.MainItem>
        </CharacterWrapper>
      ))}
    </CharactersWrapper>
  );
};

export default CharaterItems;

const CharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const CharacterWrapper = styled(Link)`
  text-decoration: none;
  justify-content: start;
`;

const CharaterName = styled.span`
  font-size: 30px;
  color: white;
  margin: 15px;
  text-shadow: 2px 2px 8px red;
`;
