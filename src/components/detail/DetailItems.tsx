import { Container, Title } from "..";

const DetailItems = ({
  title,
  items,
}: {
  title: React.ReactNode;
  items: React.ReactNode;
}) => {
  return (
    <Container.DetailContents>
      <Title.DetailItemTitle>{title}</Title.DetailItemTitle>
      {items}
    </Container.DetailContents>
  );
};
export default DetailItems;
