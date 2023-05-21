import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 30px;
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

export const DetailTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  background-color: #333;
  border-top: 1px solid white;
  color: white;
  margin: 0 0 30px;
  padding: 8px 0;
`;
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto;
    width: 350px;
    border-radius: 10px;
  }
`;

export const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Loader = styled.span`
  font-size: 40px;
  text-align: center;
  font-weight: 900;
`;

export const DeatilItem = styled.div`
  display: flex;
  padding: 3.5px 30px;
  font-size: 18px;
  font-weight: 600;

  :first-of-type {
    margin-top: 20px;
  }
`;

export const UrlItem = styled.a`
  display: flex;
  margin: 10px;
  padding: 3.5px 30px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: black;
  :first-of-type {
    margin-top: 20px;
  }
`;
