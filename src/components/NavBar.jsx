function NavBar() {
  return (
    <nav className="bg-[#121832] h-[65px] w-full flex items-center">
      <div className="container mx-auto px-4 flex justify-between">
        <h1 className="text-xl font-bold">Nesfli</h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <ul className="flex items-center space-x-6">
              <li className="font-semibold ">Home</li>
              <li className="font-semibold ">Series</li>
              <li className="font-semibold ">Premieres</li>
              <li>
                <form action="" className="bg-[#090e21] ml-2 border-solid border-[1px] border-[#248dea] rounded px-3 h-8 flex items-center">
                  <input className=" bg-[#090e21]" type="text" name="search" id="search" placeholder="Search..." />
                  <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg></button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav >

  )
}

export default NavBar