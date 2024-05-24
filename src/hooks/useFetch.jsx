import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  // Declare state variables for data, error, and isPending
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isPending, setIspending] = useState(false);
  // Declare state variable for body
  let [body, setBody] = useState(null);
  // Declare function to set body
  const setPostBody = (newBody) => {
    setBody({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBody),
    });
  };
  // Use useEffect to fetch data from the url
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
    // Check if method is POST and body is set, then fetch data
    if (method === "POST" && body) {
      fetching(body);
    }
    // If method is GET, then fetch data
    if (method === "GET") {
      fetching();
    }
    // Return a function to abort the fetch
    return () => {
      controller.abort();
    };
  }, [url, method, body]);
  // Return the data, error, and isPending
  return { data, error, isPending, setPostBody };
};
