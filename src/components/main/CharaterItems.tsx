import styled from "styled-components";
import { Link } from "react-router-dom";

import { Character } from "../../types/character";
import { CharaterImage } from "..";
import makeImagePathname from "../../utils/makeImagePathname";

interface CharaterItemsProps {
  charaterList: Array<Character> | undefined;
}

const CharaterItems = ({ charaterList }: CharaterItemsProps) => {
  return (
    <CharactersWrapper>
      {charaterList?.map(character => (
        <CharacterWrapper
          key={character.id}
          to={`/character/${character.id}`}
          state={character}>
          <CharaterImage.MainItem
            imagePathName={makeImagePathname(
              character.thumbnail.path,
              character.thumbnail.extension
            )}>
            <CharaterName>{character.name}</CharaterName>
          </CharaterImage.MainItem>
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
