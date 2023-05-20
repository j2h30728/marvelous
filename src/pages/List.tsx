import { useEffect, useState } from "react";
import { Character, get } from "../api/api";
import ApiUrl from "../api/ApiUrl";
import { Link } from "react-router-dom";

export default function List() {
  const [list, setList] = useState<Array<Character>>([]);
  const [imgs, setImgs] = useState<Array<Character>>([]);

  useEffect(() => {
    (async () => {
      const result: Array<Character> | undefined = await get(ApiUrl.list);
      result && setList(result);
    })();
  }, []);

  useEffect(() => {
    setImgs(
      list.filter(char =>
        Boolean(!char.thumbnail.path.includes("image_not_available"))
      )
    );
  }, [list]);

  return (
    <>
      <h1>MARVEL</h1>
      {imgs.map(img => (
        <img
          key={img.thumbnail.path}
          width={100}
          src={`${img.thumbnail.path}.${img.thumbnail.extension}`}
        />
      ))}
      {list.map(char => (
        <Link to={`/character/${char.id}`} key={char.id} state={char}>
          <span>{char.name}</span>
          <img
            width="100px"
            src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          />
        </Link>
      ))}
    </>
  );
}
