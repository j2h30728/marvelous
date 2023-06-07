import { useEffect, useState } from "react";

import { apiClient } from "../api";
import { Response } from "../types/common";

const useFetch = <T>(url: string, option?: RequestInit) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | undefined>();
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const responseData = await apiClient<Response<T>>(url, option);
        if (responseData) {
          setData(responseData.data.results);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, option]);

  return { data, isLoading, error };
};

export default useFetch;
