import { useEffect, useState } from "react";

export function useFetchMovies(url) {
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [controller, setController] = useState(new AbortController());


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    },
    signal: controller.signal
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}&page=${currentPage}`, options);

        if (response.ok) {
          const result = await response.json();
          setData(result.results);
          setTotalPages(result.total_pages >= 500 ? 500 : result.total_pages);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error during fetch:', error);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, currentPage, controller, options]);


  function handlePageChange(pageNumber) {
    controller.abort();

    const newController = new AbortController();
    setController(newController);

    setCurrentPage(pageNumber);
  }

  return [data, totalPages, currentPage, handlePageChange]
}