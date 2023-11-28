import './App.css'
import Button from './components/Button'
import Form from './components/Form'

function App() {

  return (
    <div className="w-full max-w-xs">
      <p className="font-sans text-xl"> INICIO DE SESION</p>

      <Form bg_color="bg-white">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' type="text" id="username" />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="password" id="password" placeholder='*****************' />
        <p className="text-red-500 text-xs italic mb-3">Please choose a password.</p>

        <Button bgcolor="bg-blue-500" name="Iniciar Sesion" /> {/* COMPONENTE */}

      </Form>
    </div >
  )
}

export default App
