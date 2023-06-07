import { DetailItem } from "..";
import { Character } from "../../types/charater";
import DetailItems from "./DetailItems";

interface DetailContentsProps {
  characterDetailData: Character | undefined;
}

const DetailContents = ({ characterDetailData }: DetailContentsProps) => (
  <>
    <DetailItems
      title="urls"
      items={characterDetailData?.urls.map((url, idx) => (
        <DetailItem.Url
          item={`${url.type} 으로 이동하기`}
          url={url.url}
          key={url.url + idx}
        />
      ))}
    />
    <DetailItems
      title={`series (${characterDetailData?.series.available})`}
      items={characterDetailData?.series.items.map((item, idx) => (
        <DetailItem item={item.name} key={item.resourceURI + idx} />
      ))}
    />
    <DetailItems
      title={`stories (${characterDetailData?.stories.available})`}
      items={characterDetailData?.stories.items.map((item, idx) => (
        <DetailItem item={item.name} key={item.resourceURI + idx} />
      ))}
    />
  </>
);
export default DetailContents;
