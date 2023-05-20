import { useEffect, useState } from "react";
import { Character, get } from "../api/api";
import ApiUrl from "../api/ApiUrl";
import { Link, useLocation, useParams } from "react-router-dom";
import DetailItems from "../components/DetailItems";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Character>();
  const { state } = useLocation() as { state: Character };
  console.log(state);

  useEffect(() => {
    (async () => {
      const respnse = await get(`${ApiUrl.baseUrl}/${id}`);
      respnse && setDetail(respnse[0]);
    })();
  }, [id]);

  return (
    <>
      <Link to="/">HOME</Link>
      <h1>{detail?.name || state.name}</h1>
      <img
        src={
          detail
            ? `${detail?.thumbnail.path}.${detail?.thumbnail.extension}`
            : `${state.thumbnail.path}.${state.thumbnail.extension}`
        }
      />
      {!detail ? (
        "Loading..."
      ) : (
        <>
          <DetailItems
            title="series"
            items={detail?.series.items.map((item, idx) => (
              <a key={item.resourceURI + idx} href={item.resourceURI}>
                {item.name}
              </a>
            ))}
          />
          <DetailItems
            title="stories"
            items={detail?.stories.items.map((item, idx) => (
              <a key={item.resourceURI + idx} href={item.resourceURI}>
                {item.name}
              </a>
            ))}
          />
          <DetailItems
            title="urls"
            items={detail?.urls.map((url, idx) => (
              <a key={url.url + idx} href={url.url}>
                {url.type}
              </a>
            ))}
          />
        </>
      )}
    </>
  );
}
