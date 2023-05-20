import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  height: 100vh; // 스크롤 가능한 높이 설정
  display: flex;
  flex-direction: column;
`;

export const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;
export const Charater = styled(Link)<{ bgphoto: string }>`
  display: flex;
  justify-content: start;
  text-decoration: none;
  border: 1px solid gray;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.bgphoto});
  background-size: cover;
  background-position: left center;
`;
export const CharaterName = styled.span`
  font-size: 30px;
  color: white;
  margin: 15px;
  text-shadow: 2px 2px 8px red;
`;
