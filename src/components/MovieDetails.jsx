import { useFetchMovie } from "../hooks/useFetchMovie"

function MovieDetails({ url }) {
  const [data] = useFetchMovie(url)

  function roundToDecimal(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    const roundedNumber = Math.round(number * factor) / factor;
    return roundedNumber;
  }

  const img_url = `http://image.tmdb.org/t/p/w342/${data.poster_path}`

  return (
    <div>
      <div>
        <img src={img_url} alt="" />
      </div>
      <div>
        <h1 className="">{data.title}</h1>
        <p><span className="">Título Original: </span><span className="">{data.original_title}</span></p>
        <p><span className="">Duración: </span><span className="">1h 20m</span></p>
        <p><span className="">Año: </span><span className="">{data.release_date}</span></p>
        <p><span className="">Sinópsis: </span><span className="">{data.overview}</span></p>
        <p><span className="">Calidad: </span><span className="">Español - HD</span></p>
        <p><span className="">Reparto: </span><span className=""> Me, You, They</span></p>
        <p><span className="">Popularidad: </span><span className="">{roundToDecimal(data.vote_average, 2)}/10</span></p>
      </div>
    </div>
  )
}

export default MovieDetails