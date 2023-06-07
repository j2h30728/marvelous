import styled from "styled-components";

import { CharaterList } from "../components";

export default function Main() {
  return (
    <Container>
      <CharaterList />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
