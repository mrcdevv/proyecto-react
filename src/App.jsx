import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './screens/Home'
import Premiers from './screens/Premiers'
import NavBar from './components/NavBar'
import Movie from './screens/Movie'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estrenos' element={<Premiers />} />
        <Route path='/pelicula/:id' element={<Movie />} />
        <Route path='/peliculas/:anio' element={<Home />} />
        <Route path='/peliculas/categoria/:categoria' element={<Home />} />
        <Route path='/peliculas/busqueda/:texto' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
