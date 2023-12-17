import { useEffect, useState } from "react"
import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";

function Cards() {
  const [data, setData] = useState([])

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key={}}';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData()
    console.log(data);
  }, [])


  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? (
        data.slice(0, 21).map((game) => (
          <MainCard
            key={game.id}
            title={game.title}
            image={game.thumbnail}
            description={game.short_description}
          />
        ))
      ) : (
        <CardsSkeleton />
      )}
    </div>
  );
}

export default Cards;