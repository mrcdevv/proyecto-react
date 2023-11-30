import ToggleTheme from "./ToggleTheme"

function NavBar() {
  return (
    <nav className="flex items-center mb-4">
      <ul className="flex align-middle">

        <li className="mr-6 align-middle">
          <p className="text-blue-500 hover:text-blue-800 align-middle">Home</p>
        </li>
        <li className="mr-6">
          <p className="text-blue-500 hover:text-blue-800">About</p>
        </li>
      </ul>

      <ToggleTheme />
    </nav >

  )
}

export default NavBar

