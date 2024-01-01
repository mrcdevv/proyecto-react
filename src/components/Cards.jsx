import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";
import Pagination from "./Pagination";

function Cards({ title, apiEndpoint }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_API_KEY}`
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiEndpoint}?page=${currentPage}`, options);

        if (response.ok) {
          const result = await response.json();
          setData(result.results);
          setTotalPages(result.total_pages);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [apiEndpoint, currentPage]);

  const poster_img_path = "https://image.tmdb.org/t/p/w185";

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-calc-100%-250px mt-6">
      <p className="text-2xl mb-3 font-bold">{title}</p>

      <div className="w-full flex flex-wrap">
        {data.length > 0 ? (
          data.map((game) => (
            <MainCard
              key={game.id}
              title={game.title}
              image={poster_img_path + game.poster_path}
              year={new Date(game.release_date).getFullYear()}
            />
          ))
        ) : (
          <CardsSkeleton />
        )}
      </div>

      <div className="flex justify-center mt-6">

        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Cards;
