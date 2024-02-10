import { useFetchMovie } from "../hooks/useFetchMovie"

function MovieDetails({ url }) {
  const [data] = useFetchMovie(url)

  function roundToDecimal(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    const roundedNumber = Math.round(number * factor) / factor;
    return roundedNumber;
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>{data.title}</h1>
        <p><span>Título Original: </span><span>{data.original_title}</span></p>
        <p><span>Duración: </span><span>1h 20m</span></p>
        <p><span>Año: </span><span>{data.release_date}</span></p>
        <p><span>Sinópsis: </span><span>{data.overview}</span></p>
        <p><span>Calidad: </span><span>Español - HD</span></p>
        <p><span>Reparto: </span><span> Me, You, They</span></p>
        <p><span>Popularidad: </span><span>{roundToDecimal(data.vote_average, 2)}/10</span></p>
      </div>
    </div>
  )
}

export default MovieDetails