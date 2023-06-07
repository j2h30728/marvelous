import styled from "styled-components";

interface CharaterImageProps {
  imagePathName: string;
  children?: React.ReactNode;
}

const CharaterImage = ({ imagePathName, children }: CharaterImageProps) => {
  return <Charater imagePathName={imagePathName}>{children}</Charater>;
};

CharaterImage.MainItem = ({ imagePathName, children }: CharaterImageProps) => (
  <MainCharater imagePathName={imagePathName}>{children}</MainCharater>
);

export default CharaterImage;

const Charater = styled.div<{ imagePathName: string }>`
  border: 1px solid gray;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  background-image: url(${props => props.imagePathName});
  background-size: cover;
  background-position: left bottom;
`;

const MainCharater = styled(Charater)<{ imagePathName: string }>`
  display: flex;
  height: 300px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.imagePathName});
`;
