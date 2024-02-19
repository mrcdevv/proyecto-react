import { useFetchMovies } from "../hooks/useFetchMovies";

import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";
import Pagination from "./Pagination";

function Cards({ title, apiEndpoint }) {
  const [data, totalPages, currentPage, handlePageChange] = useFetchMovies(apiEndpoint)

  const poster_img_path = "https://image.tmdb.org/t/p/w185";

  return (
    <div className="w-calc-100%-250px mt-6">
      <p className="text-2xl mb-3 font-bold">{title}</p>

      <div className="w-full flex flex-wrap">
        {data.length > 0 ? (
          data.map((movie) => (
            <MainCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={poster_img_path + movie.poster_path}
              year={new Date(movie.release_date).getFullYear()}
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
