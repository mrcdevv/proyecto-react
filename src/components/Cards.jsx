import { useEffect, useState } from "react"
import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";

function Cards({ title, apiEndpoint }) {
  const [data, setData] = useState([])

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
        const response = await fetch(apiEndpoint, options);
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

  const poster_img_path = "https://image.tmdb.org/t/p/w185"

  return (
    <div className="w-calc-100%-250px mt-6">
      <p className="text-2xl mb-3 font-bold">{title}</p>

      <div className="w-full flex flex-wrap">
        {data.length > 0 ? (

          data.map((game) => (

            < MainCard
              title={game.title}
              image={poster_img_path + game.poster_path}
              year={new Date(game.release_date).getFullYear()}
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