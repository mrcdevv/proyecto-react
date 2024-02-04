import { useParams } from "react-router-dom"
import MovieDetails from "../components/MovieDetails"

function Movie() {
  const { id } = useParams

  return (
    <>
      <MovieDetails id={id} />
    </>
  )

}

export default Movie