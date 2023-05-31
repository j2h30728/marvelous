import styled from "styled-components";
import { Character } from "../../types/Charater";
import { CharaterImg } from "..";

interface CharaterItemsProps {
  list: Array<Character>;
}

const CharaterItems = ({ list }: CharaterItemsProps) => {
  return (
    <CharacterWrapper>
      {list.map(char => (
        <CharaterImg.MainItem key={char.id} char={char} />
      ))}
    </CharacterWrapper>
  );
};

export default CharaterItems;

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;
