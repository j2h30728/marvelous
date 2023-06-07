import styled from "styled-components";

const ErrorPage = () => {
  return <ErrorMessage>잘못된 요청입니다.</ErrorMessage>;
};

export default ErrorPage;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
