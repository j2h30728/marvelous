import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Header = ({ goBack }: { goBack: boolean }) => {
  const nav = useNavigate();

  return (
    <S.TitleWrapper>
      {goBack && <S.BackBtn onClick={() => nav(-1)}>&lt;</S.BackBtn>}
      <S.Title to="/">MARVEL</S.Title>
    </S.TitleWrapper>
  );
};
export default Header;
