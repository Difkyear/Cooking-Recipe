import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isPending, setIspending] = useState(false);
  let [body, setBody] = useState(null);
  const setPostBody = (newBody) => {
    setBody({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });
  };
  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;
    const fetching = async (option) => {
      setIspending(true);
      try {
        let respond = await fetch(url, { ...option, signal });
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
    if (method === "POST" && body) {
      fetching(body);
    }
    if (method === "GET") {
      fetching();
    }
    return () => {
      controller.abort();
    };
  }, [url, method, body]);
  return { data, error, isPending, setPostBody };
};
