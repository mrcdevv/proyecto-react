import { useEffect, useState } from "react"
import MainCard from "./MainCard";
import CardsSkeleton from "./CardsSkeleton";

function Cards() {
  const [data, setData] = useState([])

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9645663335msh061dc3a348613dfp10a583jsn187daadda971',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }


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
    <>
      {data.length > 0 ? (
        data.slice(0, 21).map((game) => (
          <MainCard
            key={game.id} // Agrega un key único para cada elemento en el array
            title={game.title}
            image={game.thumbnail}
            description={game.short_description}
          />
        ))
      ) : (
        <CardsSkeleton />
      )}
    </>
  );
}

export default Cards;