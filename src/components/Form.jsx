import { useRef, useState } from 'react'
import Button from './Button'


function Form(props) {
  const password = useRef(null)
  let [isValid, setIsValid] = useState(false)

  const handleInput = () => {
    const passwordValue = password.current.value;
    setIsValid(passwordValue.length >= 8)
    console.log(isValid)
  };


  return (
    <form className={`${props.bg_color} shadow-md rounded px-8 pt-6 pb-8 mb-4`} onSubmit={e => e.preventDefault()}>
      {/*{props.children} Esto me sirve para poder agregarle los elementos que quiera desde el componente padre */}

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' type="text" id="username" />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="password" id="password" placeholder='*****************' ref={password} onChange={handleInput} />

      {isValid ? null :
        (<p className="text-red-500 text-xs italic mb-3">Please enter a password.</p>)
      }

      <Button bgcolor="bg-blue-500" name="Iniciar Sesion" /> {/* COMPONENTE */}

    </form>
  )
}

export default Form 