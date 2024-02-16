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
    <div className="flex">
      <div>
        <img src={img_url} alt="" className="w-48 h-auto" />
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p><span className="font-bold">Título Original: </span><span className="">{data.original_title}</span></p>
        <p><span className="font-bold">Duración: </span><span className="">1h 20m</span></p>
        <p><span className="font-bold">Año: </span><span className="">{data.release_date}</span></p>
        <p><span className="font-bold">Sinópsis: </span><span className="">{data.overview}</span></p>
        <p><span className="font-bold">Calidad: </span><span className="">Español - HD</span></p>
        <p><span className="font-bold">Reparto: </span><span className=""> Me, You, They</span></p>
        <p><span className="font-bold">Popularidad: </span><span className="">{roundToDecimal(data.vote_average, 2)}/10</span></p>
      </div>
    </div>
  )
}

export default MovieDetails