import { useEffect, useState } from "react";
import { get } from "../api";
import { Character } from "../types/Charater";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<Character>>([]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const result = await get(url);
      if (result) {
        setData(result);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
