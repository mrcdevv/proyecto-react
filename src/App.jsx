import { Route, Routes, BrowserRouter } from 'react-router-dom'


import Home from './screens/Home'
import NavBar from './components/NavBar'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
