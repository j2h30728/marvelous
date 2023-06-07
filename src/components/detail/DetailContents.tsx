import { DetailItem } from "..";
import { Character } from "../../types/character";
import DetailItems from "./DetailItems";

interface DetailContentsProps {
  characterDetailData: Character | undefined;
}

const DetailContents = ({ characterDetailData }: DetailContentsProps) => (
  <>
    <DetailItems
      title="urls"
      items={characterDetailData?.urls.map((detailDataUrl, index) => (
        <DetailItem.Url
          item={`${detailDataUrl.type} 으로 이동하기`}
          url={detailDataUrl.url}
          key={detailDataUrl.url + index}
        />
      ))}
    />
    <DetailItems
      title={`series (${characterDetailData?.series.available})`}
      items={characterDetailData?.series.items.map((item, index) => (
        <DetailItem item={item.name} key={item.resourceURI + index} />
      ))}
    />
    <DetailItems
      title={`stories (${characterDetailData?.stories.available})`}
      items={characterDetailData?.stories.items.map((item, index) => (
        <DetailItem item={item.name} key={item.resourceURI + index} />
      ))}
    />
  </>
);
export default DetailContents;
