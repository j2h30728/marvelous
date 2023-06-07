import styled from "styled-components";

interface CharaterImgProps {
  imagePathname: string;
  children?: React.ReactNode;
}

const CharaterImg = ({ imagePathname, children }: CharaterImgProps) => {
  return <Charater imagePathname={imagePathname}>{children}</Charater>;
};

CharaterImg.MainItem = ({ imagePathname, children }: CharaterImgProps) => (
  <MainCharater imagePathname={imagePathname}>{children}</MainCharater>
);

export default CharaterImg;

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
