function NavBar() {
  return (
    <nav class="bg-[#121832] h-[65px] w-[100%] flex items-center">
      <div class="container flex justify-between">
        <h1 class="text-xl font-bold">Nesfli</h1>
        <div class="flex items-center">
          <div class="flex items-center">
            <ul class="flex items-center space-x-6">
              <li class="font-semibold ">Home</li>
              <li class="font-semibold ">Articles</li>
              <li>
                <form action="">
                  <input class="bg-[#090e21] ml-2 " type="text" name="search" id="search" placeholder="Search..." />
                  <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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