import { useParams } from "react-router-dom";
import Aside from "../components/Aside";
import Cards from "../components/Cards";

function Home() {
  const { categoria, anio, texto } = useParams();
  let api = "";

  if (texto) {
    api = `https://api.themoviedb.org/3/search/movie?query=${texto}&language=es-Es&page=1`;

    return (
      <div className="container mx-auto flex justify-between">
        <Cards title={`Resultados de búsqueda para "${texto}"`} apiEndpoint={api} />
        <Aside />
      </div>
    );

  } else {
    api = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&sort_by=popularity.desc${anio !== undefined ? '&primary_release_year=' + anio : ''}${categoria !== undefined ? '&with_genres=' + categoria : ''}`;

    return (
      <div className="container mx-auto flex justify-between">
        <Cards title='Películas recomendadas para ti' apiEndpoint={api} />
        <Aside />
      </div>
    );
  }


}

export default Home;
