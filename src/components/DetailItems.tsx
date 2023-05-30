import styled from "styled-components";

const DetailItems = ({
  title,
  items,
}: {
  title: React.ReactNode;
  items: React.ReactNode;
}) => {
  return (
    <DetailWrapper>
      <ItemTitle>{title}</ItemTitle>
      {items}
    </DetailWrapper>
  );
};
export default DetailItems;

export const DetailWrapper = styled.div`
  margin: 30px 0;
`;

export const ItemTitle = styled.h3`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
  padding-bottom: 5px;
  border-bottom: 3px dashed #3333;
`;
