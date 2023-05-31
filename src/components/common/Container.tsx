import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: PropsWithChildren<ContainerProps>) => (
  <BaseContainer>{children}</BaseContainer>
);

Container.DetailContents = ({
  children,
}: PropsWithChildren<ContainerProps>) => (
  <DetailContentsContainer>{children}</DetailContentsContainer>
);

Container.Image = ({ children }: PropsWithChildren<ContainerProps>) => (
  <ImageContainer>{children}</ImageContainer>
);

export default Container;

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailContentsContainer = styled(BaseContainer)`
  gap: 5px;
`;
const ImageContainer = styled(BaseContainer)`
  gap: 5px;
`;
