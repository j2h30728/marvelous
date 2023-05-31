import { useEffect, useState } from "react";
import { Character } from "../types/Charater";
import { API_LIST_URL, get } from "../api";

const useGetList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<Array<Character>>([]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const result: Array<Character> | undefined = await get(API_LIST_URL);
      if (result) {
        setList(result);
        setIsLoading(false);
      }
    })();
  }, []);

  return { list, isLoading };
};
export default useGetList;
