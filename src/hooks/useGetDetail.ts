import { useEffect, useState } from "react";
import { Character } from "../types/Charater";
import { API_BASE_URL, get } from "../api";
import { useParams } from "react-router-dom";

const useGetDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState<Character>();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const respnse = await get(`${API_BASE_URL}/${id}`);
      if (respnse) {
        setDetail(respnse[0]);
        setIsLoading(false);
      }
    })();
  }, [id]);

  return { detail, isLoading };
};

export default useGetDetail;
