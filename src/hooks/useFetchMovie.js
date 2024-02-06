import { useEffect, useState } from "react";

export function useFetchMovie(url) {
  const [data, setData] = useState([])

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

  }, [options])

}