import { DetailWrapper, ItemTitle } from "./style";

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
