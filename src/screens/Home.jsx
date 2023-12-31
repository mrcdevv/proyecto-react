import Aside from "../components/Aside"
import Cards from "../components/Cards"

function Home() {
  const api = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  return (

    <div className="container mx-auto flex justify-between" >

      <Cards title='Películas Actualizadas recientemente' apiEndpoint={api} />
      <Aside />
    </div>




  )
}

export default Home