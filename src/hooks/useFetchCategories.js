import { useState, useEffect } from "react";

export function useFetchCategories() {
  const [categories, setCategories] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)

      if (response.ok) {
        const data = await response.json()
        setCategories(data.genres)
      }
    }

    fetchCategories()
  }, [])

  return categories

}