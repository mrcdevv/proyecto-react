import { useEffect, useState } from "react";

export function useFetchMovies(url) {
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}&page=${currentPage}`, options)

      if (response.ok) {
        const data = await response.json()
        setData(data.results)
        setTotalPages(data.total_pages >= 500 ? 500 : data.total_pages)

        // TODO: implement abort controller
      }
    }

    fetchData()

    return -1
  }, [url, currentPage])

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return [data, totalPages, currentPage, handlePageChange]
}