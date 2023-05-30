import { useNavigate } from "react-router-dom";
import { TitleWrapper, BackBtn, Title } from "./style";

const Header = ({ isGoBack }: { isGoBack: boolean }) => {
  const nav = useNavigate();

  return (
    <TitleWrapper>
      {isGoBack && <BackBtn onClick={() => nav(-1)}>&lt;</BackBtn>}
      <Title to="/">MARVEL</Title>
    </TitleWrapper>
  );
};
export default Header;
