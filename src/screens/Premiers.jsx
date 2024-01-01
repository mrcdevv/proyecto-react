import Aside from "../components/Aside"
import Cards from "../components/Cards"

function Premiers() {
  const api = 'https://api.themoviedb.org/3/movie/now_playing?language=es';

  return (
    <div className="container mx-auto flex justify-between" >
      <Cards title='Películas de Estreno' apiEndpoint={api} />
      <Aside />
    </div>
  )
}

export default Premiers