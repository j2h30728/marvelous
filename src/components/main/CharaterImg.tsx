import styled from "styled-components";
import { Character } from "../../types/types";
import { Link } from "react-router-dom";
import makeImagePathname from "../../utils/makeImagePathname";

interface CharaterImgProps {
  char: Character;
}

const CharaterImg = ({ char }: CharaterImgProps) => {
  return (
    <Charater
      bgphoto={makeImagePathname(
        char.thumbnail.path,
        char.thumbnail.extension
      )}></Charater>
  );
};

CharaterImg.MainItem = ({ char }: CharaterImgProps) => (
  <MainCharater
    as={Link}
    to={`/character/${char.id}`}
    state={char}
    bgphoto={makeImagePathname(char.thumbnail.path, char.thumbnail.extension)}>
    <CharaterName>{char.name}</CharaterName>
  </MainCharater>
);

export default CharaterImg;

const Charater = styled.div<{ bgphoto: string }>`
  display: flex;
  justify-content: start;
  text-decoration: none;
  border: 1px solid gray;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  background-image: url(${props => props.bgphoto});
  background-size: cover;
  background-position: left center;
`;

const MainCharater = styled(Charater)<{ bgphoto: string }>`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.bgphoto});
`;

const CharaterName = styled.span`
  font-size: 30px;
  color: white;
  margin: 15px;
  text-shadow: 2px 2px 8px red;
`;
