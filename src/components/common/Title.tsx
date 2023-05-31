import { PropsWithChildren } from "react";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: PropsWithChildren<TitleProps>) => (
  <BaseTitle>{children}</BaseTitle>
);

Title.DetailContents = ({ children }: PropsWithChildren<TitleProps>) => (
  <DetailTitle>{children}</DetailTitle>
);
Title.DetailItemTitle = ({ children }: PropsWithChildren<TitleProps>) => (
  <DetailItemTitle>{children}</DetailItemTitle>
);
export default Title;

const BaseTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const DetailTitle = styled(BaseTitle)`
  border-top: 1px solid white;
  color: white;
  background-color: #333;
  margin: 0 0 30px;
  padding: 8px 0;
`;

const DetailItemTitle = styled(BaseTitle)`
  font-size: 35px;
  margin: 10px;
  padding-bottom: 5px;
  border-bottom: 3px dashed #3333;
`;
