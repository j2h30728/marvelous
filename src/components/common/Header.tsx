import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isRootPath }: { isRootPath: boolean }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <TitleWrapper>
      {isRootPath && <BackBotton onClick={handleGoBack}>&lt;</BackBotton>}
      <Title to="/">MARVEL</Title>
    </TitleWrapper>
  );
};
export default Header;

export const TitleWrapper = styled.div`
  background-color: #333;
  height: 70px;
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
  font-size: 35px;
  transform: scaleY(2);
  text-decoration: none;
  font-weight: 900;
  letter-spacing: -2px;
`;

export const BackBotton = styled.div`
  color: white;
  font-size: 40px;
  position: relative;
  left: 30px;
  cursor: pointer;
`;
