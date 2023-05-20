import styled from "styled-components";

const DetailItems = ({
  title,
  items,
}: {
  title: string;
  items: React.ReactNode;
}) => {
  return (
    <div>
      <ItemTitle>{title}</ItemTitle>
      {items}
    </div>
  );
};
export default DetailItems;

const ItemTitle = styled.h3``;
