import { PropsWithChildren } from "react";
import styled from "styled-components";

interface LoaderProps {
  children: React.ReactNode;
}

const Loader = ({ children }: PropsWithChildren<LoaderProps>) => (
  <BaseLoader>{children}</BaseLoader>
);

Loader.CharaterList = ({ children }: PropsWithChildren<LoaderProps>) => (
  <ListLoader>{children}</ListLoader>
);
Loader.CharacterDetail = ({ children }: PropsWithChildren<LoaderProps>) => (
  <DetailLoader>{children}</DetailLoader>
);

export default Loader;

const BaseLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 50px;
  font-weight: 900;
`;

const ListLoader = styled(BaseLoader)`
  margin-top: 300px;
`;
const DetailLoader = styled(BaseLoader)``;
