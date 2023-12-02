import './App.css'
import Form from './components/Form'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="w-full max-w-xs">

      <NavBar />

      <h2 className="font-sans mb-6"> INICIO DE SESION</h2>

      <Form bg_color="bg-white" /> {/* COMPONENTE PADRE CON PROP CHILDREN*/}


    </div >
  )
}

export default App
