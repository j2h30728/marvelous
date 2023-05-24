import { useEffect, useState } from "react";
import { Character } from "../types/types";
import { ApiUrl, get } from "../api";
import { useParams } from "react-router-dom";

const useGetDetail = () => {
  const { id } = useParams();
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

export default useGetDetail;