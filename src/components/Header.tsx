import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ goBack }: { goBack: boolean }) => {
  const nav = useNavigate();

  return (
    <TitleWrapper>
      {goBack && <BackBtn onClick={() => nav(-1)}>&lt;</BackBtn>}
      <Title to="/">MARVEL</Title>
    </TitleWrapper>
  );
};
export default Header;
export const TitleWrapper = styled.div`
  background-color: #333;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Title = styled(Link)`
  background-color: red;
  color: white;
  width: fit-content;
  margin: 0 auto;
  font-size: 30px;
  transform: scaleY(1.8);
  text-decoration: none;
  font-weight: 900;
`;

const BackBtn = styled.div`
  color: white;
  font-size: 40px;
  position: relative;
  left: 30px;
`;
