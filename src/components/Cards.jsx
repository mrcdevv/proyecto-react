import { useEffect, useState } from "react"
import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";

function Cards() {
  const [data, setData] = useState([])

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`;


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData()
    console.log(data);
  }, [])

  const img_path = "https://image.tmdb.org/t/p/w154"

  return (
    <div className="w-calc-100%-250px">
      <p className="text-base mb-1.5 ">Release date</p>

      <div className="w-full flex flex-wrap">
        {data.length > 0 ? (
          data.slice(0, 21).map((game) => (
            <MainCard
              key={game.id}
              title={game.title}
              image={img_path + game.poster_path}
              description={game.overview}
            />
          ))
        ) : (
          <CardsSkeleton />
        )}
      </div>
    </div>
  );
}

export default Cards;