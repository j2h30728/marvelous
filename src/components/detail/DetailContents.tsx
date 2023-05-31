import { DetailItem } from "..";
import { Character } from "../../types/Charater";
import DetailItems from "./DetailItems";

interface DetailContentsProps {
  detail: Character | undefined;
}

const DetailContents = ({ detail }: DetailContentsProps) => (
  <>
    <DetailItems
      title="urls"
      items={detail?.urls.map((url, idx) => (
        <DetailItem.Url
          item={`${url.type} 으로 이동하기`}
          url={url.url}
          key={url.url + idx}
        />
      ))}
    />
    <DetailItems
      title={`series (${detail?.series.available})`}
      items={detail?.series.items.map((item, idx) => (
        <DetailItem item={item.name} key={item.resourceURI + idx} />
      ))}
    />
    <DetailItems
      title={`stories (${detail?.stories.available})`}
      items={detail?.stories.items.map((item, idx) => (
        <DetailItem item={item.name} key={item.resourceURI + idx} />
      ))}
    />
  </>
);
export default DetailContents;
