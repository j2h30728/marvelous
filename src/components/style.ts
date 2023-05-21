import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const BackBtn = styled.div`
  color: white;
  font-size: 40px;
  position: relative;
  left: 30px;
  cursor: pointer;
`;

export const DetailWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ItemTitle = styled.h3`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
  padding-bottom: 5px;
  border-bottom: 3px dashed #3333;
`;
