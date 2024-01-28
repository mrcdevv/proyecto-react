import { useParams } from "react-router-dom";
import Aside from "../components/Aside"
import Cards from "../components/Cards"

function Home() {
  const { categoria, anio } = useParams();

  const api = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&sort_by=popularity.desc${anio !== undefined ? '&primary_release_year=' + anio : ''}`;

  return (
    <div className="container mx-auto flex justify-between" >

      <Cards title='Películas recomendadas para ti' apiEndpoint={api} />
      <Aside />
    </div>
  )
}

export default Home