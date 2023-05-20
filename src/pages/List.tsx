import { useEffect, useState } from "react";
import { Character, get } from "../api/api";
import ApiUrl from "../api/ApiUrl";
import { Link } from "react-router-dom";

export default function List() {
  const [list, setList] = useState<Array<Character>>([]);
  const [img, setImg] = useState<Array<Character>>([]);

  useEffect(() => {
    (async () => {
      const result: Array<Character> | undefined = await get(ApiUrl.list);
      result && setList(result);
    })();
  }, []);

  useEffect(() => {
    setImg(
      list.filter(char =>
        Boolean(!char.thumbnail.path.includes("image_not_available"))
      )
    );
  }, [list]);

  console.log(img);
  return (
    <>
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
