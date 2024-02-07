import { useEffect, useState } from "react";

export function useFetchMovie(url) {
  const [data, setData] = useState([])
  const [controller, setController] = useState(null);

  useEffect(() => {
    setController(new AbortController());
  }, []);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    },
    signal: controller?.signal
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
    }

    fetchData()

    return () => {
      if (controller) controller.abort();
    };

  }, [url, options])

  return [data]

}