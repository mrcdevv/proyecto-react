import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import Home from './screens/Home'
import Form from './screens/Form'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
