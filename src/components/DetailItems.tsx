const DetailItems = ({
  title,
  items,
}: {
  title: string;
  items: React.ReactNode;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      {items}
    </div>
  );
};
export default DetailItems;
