import { useEffect, useState } from "react";
import { Character } from "../types/types";
import { ApiUrl, get } from "../api";

export const useGetList = () => {
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

export const useGetDetail = (id: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState<Character>();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const respnse = await get(`${ApiUrl.baseUrl}/${id}`);
      if (respnse) {
        setDetail(respnse[0]);
        setIsLoading(false);
      }
    })();
  }, [id]);

  return { detail, isLoading };
};
