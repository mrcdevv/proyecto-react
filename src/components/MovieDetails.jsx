import { Link } from "react-router-dom";
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
    <div className="container flex mt-6">
      <div className="w-[60%]">
        <img src={img_url} alt="" className="" />
      </div>
      <div className=" ml-4">
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
        <p className="mb-2"><span className="font-bold mb-8">Título Original: </span><span className="">{data.original_title}</span></p>
        <p className="mb-2"><span className="font-bold">Duración: </span><span className="">1h 20m</span></p>
        <p className="mb-2"><span className="font-bold">Año de Lanzamiento: </span><span className="">{data.release_date}</span></p>
        <p className="mb-2"><span className="font-bold">Sinópsis: </span><span className="">{data.overview}</span></p>
        <p className="mb-2"><span className="font-bold">Popularidad: </span><span className="">{roundToDecimal(data.vote_average, 2)}/10 ({data.vote_count} votos)</span></p>
        <a href={data.homepage} target="_blank">
          Ir a la página de inicio
        </a>
      </div>
    </div>
  )
}

export default MovieDetails