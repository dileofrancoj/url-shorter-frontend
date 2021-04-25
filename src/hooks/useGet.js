import { useEffect, useState, useCallback } from "react";
import { API } from "../API";

export const useGet = (endpoint, initialState = []) => {
  const [info, setInfo] = useState(initialState);
  const [fetching, setFetching] = useState(true);

  const get = useCallback(async () => {
    try {
      const { data } = await API.get(endpoint);
      setInfo(data);
      setFetching(false);
    } catch (e) {
      console.error(e);
    }
  }, [endpoint]);

  useEffect(() => {
    get();
  }, [get]);

  return [info, fetching];
};
