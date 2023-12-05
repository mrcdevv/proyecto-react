import { useEffect, useState } from "react"

function MainBody() {
  const [data, setData] = useState(null);


  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
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

  }, [])

  return (
    <>
      {data != null ? (
        <div>
          <h3>{data.title}</h3>
        </div>
      ) : null}
    </>
  )



}


export default MainBody