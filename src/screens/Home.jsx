import Aside from "../components/Aside"
import Cards from "../components/Cards"

function Home() {
  return (
    <div className="container mx-auto flex justify-between" >
      <Cards />
      <Aside />
    </div>
  )
}

export default Home