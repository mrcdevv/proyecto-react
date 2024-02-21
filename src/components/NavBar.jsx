import { useState } from 'react';
import { useFetchCategories } from '../hooks/useFetchCategories';
import { Link } from 'react-router-dom';

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useFetchCategories();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryClick = (e, categoryId) => {
    e.stopPropagation();
    window.location.href = `/peliculas/categoria/${encodeURIComponent(categoryId)}`;
  };

  return (
    <nav className="bg-[#121832] h-[65px] w-full flex items-center">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-white">Nesfli</h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <ul className="flex items-center space-x-6 text-white">
              <li className="font-semibold cursor-pointer">Inicio</li>
              <li className="font-semibold relative cursor-pointer" onClick={toggleDropdown}>
                Categorias
                {showDropdown && (
                  <div className="absolute top-full mt-2 bg-[#121832] z-40 border border-[#2d2d2d] rounded-md shadow-md overflow-hidden w-72 max-h-48 overflow-y-auto custom-scroll">
                    <ul className="p-4">
                      {categories.map((category) => (
                        <li
                          key={category.id}
                          className="py-1 hover:bg-[#090e21] transition duration-300 cursor-pointer"
                          onClick={(e) => handleCategoryClick(e, category.id)}
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li className="font-semibold cursor-pointer">Estrenos</li>
              <li>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `/peliculas/busqueda/${encodeURIComponent(searchTerm)}`;
                  }}
                  className="bg-[#090e21] ml-2 border-solid border-[1px] border-[#248dea] rounded px-3 h-8 flex items-center"
                >
                  <input
                    className="bg-[#090e21] text-white placeholder-gray-400 focus:outline-none"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Link to={`/peliculas/busqueda/${encodeURIComponent(searchTerm)}`}>
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 pt-0.5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </Link>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
