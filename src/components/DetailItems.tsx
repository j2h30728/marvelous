import * as S from "./style";

const DetailItems = ({
  title,
  items,
}: {
  title: string;
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
