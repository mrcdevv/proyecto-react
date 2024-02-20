import { useState, useEffect } from "react";

export function useFetchMovies(url) {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [controller, setController] = useState(new AbortController());

  useEffect(() => {
    setController(new AbortController());
  }, [url]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    },
    signal: controller.signal
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}&page=${currentPage}`, options);

        if (response.ok) {
          const result = await response.json();
          setData(result.results);
          setTotalPages(Math.min(result.total_pages, 500));
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


    return () => {
    };
  }, [url, currentPage, options]);

  function handlePageChange(pageNumber) {
    controller.abort();

    setController(new AbortController());

    setCurrentPage(pageNumber);
  }

  return [data, totalPages, currentPage, handlePageChange];
}
