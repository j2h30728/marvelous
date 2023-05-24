import { useEffect, useState } from "react";
import { Character } from "../types/types";
import { ApiUrl, get } from "../api";

const useGetList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<Array<Character>>([]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const result: Array<Character> | undefined = await get(ApiUrl.list);
      if (result) {
        setList(result);
        setIsLoading(false);
      }
    })();
  }, []);

  return { list, isLoading };
};
export default useGetList;
