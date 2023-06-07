import styled from "styled-components";
import { Title } from "..";

const DetailItems = ({
  title,
  items,
}: {
  title: React.ReactNode;
  items: React.ReactNode;
}) => {
  return (
    <DetailContentsContainer>
      <Title.DetailItemTitle>{title}</Title.DetailItemTitle>
      {items}
    </DetailContentsContainer>
  );
};
export default DetailItems;

const DetailContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
