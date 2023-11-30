import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


function ToggleTheme() {
  const [isDark, setIsDark] = useState(false)

  const handleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      {isDark ? <GoSun size="1.3rem" /> : <FaMoon size="1.3rem" />}
      <button className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" onClick={() => handleTheme()}>
        Change theme
      </button>
    </>
  )
}

export default ToggleTheme