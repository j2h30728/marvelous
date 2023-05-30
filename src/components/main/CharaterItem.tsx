import styled from "styled-components";
import { Character } from "../../types/types";
import { Link } from "react-router-dom";
import makeImagePathname from "../../utils/makeImagePathname";

interface CharaterItemProps {
  char: Character;
}

const CharaterItem = ({ char }: CharaterItemProps) => (
  <Charater
    to={`/character/${char.id}`}
    key={char.id}
    state={char}
    bgphoto={makeImagePathname(char.thumbnail.path, char.thumbnail.extension)}>
    <CharaterName>{char.name}</CharaterName>
  </Charater>
);

export default CharaterItem;

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

const CharaterName = styled.span`
  font-size: 30px;
  color: white;
  margin: 15px;
  text-shadow: 2px 2px 8px red;
`;
