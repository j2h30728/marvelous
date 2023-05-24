import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Header = ({ isGoBack }: { isGoBack: boolean }) => {
  const nav = useNavigate();

  return (
    <S.TitleWrapper>
      {isGoBack && <S.BackBtn onClick={() => nav(-1)}>&lt;</S.BackBtn>}
      <S.Title to="/">MARVEL</S.Title>
    </S.TitleWrapper>
  );
};
export default Header;
