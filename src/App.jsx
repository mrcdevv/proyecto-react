import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './screens/Home'
import Premiers from './screens/Premiers'
import NavBar from './components/NavBar'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estrenos' element={<Premiers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
