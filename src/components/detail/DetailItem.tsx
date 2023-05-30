import styled from "styled-components";

interface DetailItemProps {
  item: React.ReactNode;
}
interface DetailItemUrlProps extends DetailItemProps {
  url: string;
}

const DetailItem = ({ item }: DetailItemProps) => (
  <DeatilItem>{item}</DeatilItem>
);

DetailItem.Url = ({ url, item }: DetailItemUrlProps) => (
  <UrlItem as="a" href={url}>
    {item}
  </UrlItem>
);

export default DetailItem;

const DeatilItem = styled.div`
  display: flex;
  padding: 3.5px 30px;
  font-size: 18px;
  font-weight: 600;

  :first-of-type {
    margin-top: 20px;
  }
`;
const UrlItem = styled(DeatilItem)`
  margin: 10px;
  text-decoration: none;
  color: black;
`;
