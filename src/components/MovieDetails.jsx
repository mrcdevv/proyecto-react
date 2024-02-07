import { useFetchMovie } from "../hooks/useFetchMovie"

function MovieDetails({ url }) {
  const [data] = useFetchMovie(url)

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1></h1>
        <p><span>Título Original: </span><span>Abc</span></p>
        <p><span>Duración: </span><span>1h 20m</span></p>
        <p><span>Año: </span><span>2024</span></p>
        <p><span>Sinópsis: </span><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora recusandae et nobis obcaecati dicta soluta animi rerum nostrum commodi, hic, labore cumque at, eaque provident sint explicabo inventore fugit ipsa molestias reiciendis ut blanditiis placeat quae. Earum aliquid ullam distinctio beatae, saepe fugiat deserunt asperiores amet totam dolores veniam, voluptatem voluptatum quam recusandae similique sed aut delectus velit, numquam quae nam unde sit id repellendus. Ea assumenda deleniti, corporis numquam quos minima! Blanditiis ut aut reprehenderit cumque facere? Quisquam repudiandae quae cumque reprehenderit suscipit placeat maiores mollitia quos officia! Quam illo exercitationem ipsam! Adipisci neque libero odit veniam mollitia.</span></p>
        <p><span>Calidad: </span><span>Español - HD</span></p>
        <p><span>Reparto: </span><span> Me, You, They</span></p>
        <p><span>Popularidad: </span><span>6.8/10</span></p>
      </div>
    </div>
  )
}

export default MovieDetails