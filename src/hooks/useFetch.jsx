import { useState, useEffect } from "react";

export const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isPending, setIspending] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;
    const fetching = async () => {
      setIspending(true);
      try {
        let respond = await fetch(url, { signal });
        if (!respond.ok) {
          throw new Error(respond.statusText);
        }
        let data = await respond.json();
        setIspending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIspending(false);
          setError("Could not fetch the data'");
        }
      }
    };
    fetching();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, error, isPending };
};
