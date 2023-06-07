import styled from "styled-components";

interface CharaterImageProps {
  imagePathname: string;
  children?: React.ReactNode;
}

const CharaterImage = ({ imagePathname, children }: CharaterImageProps) => {
  return <Charater imagePathname={imagePathname}>{children}</Charater>;
};

CharaterImage.MainItem = ({ imagePathname, children }: CharaterImageProps) => (
  <MainCharater imagePathname={imagePathname}>{children}</MainCharater>
);

export default CharaterImage;

const Charater = styled.div<{ imagePathname: string }>`
  border: 1px solid gray;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  background-image: url(${props => props.imagePathname});
  background-size: cover;
  background-position: left bottom;
`;

const MainCharater = styled(Charater)<{ imagePathname: string }>`
  display: flex;
  height: 300px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.imagePathname});
`;
