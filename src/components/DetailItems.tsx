import * as S from "./style";

const DetailItems = ({
  title,
  items,
}: {
  title: React.ReactNode;
  items: React.ReactNode;
}) => {
  return (
    <S.DetailWrapper>
      <S.ItemTitle>{title}</S.ItemTitle>
      {items}
    </S.DetailWrapper>
  );
};
export default DetailItems;
