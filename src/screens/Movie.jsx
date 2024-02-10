import { useParams } from "react-router-dom"
import MovieDetails from "../components/MovieDetails"

function Movie() {
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES`

  return (
    <>
      <MovieDetails url={url} />
    </>
  )

}

export default Movie