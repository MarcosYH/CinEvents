import React from 'react'
import logo from '../../assets/logo2.png'
function Navbar() {

    return (
      <div>
<nav className=" bg-white fixed w-full z-20 top-0 left-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className=' flex items-center justify-center'>
              <img
                src={logo}
                alt='logo'
                className=' mx-auto'
              />
            </div>
    <div className="flex md:order-2">
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-black" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input
       type="text" 
       id="search-navbar"
      class="block w-full p-2 pl-10 text-sm text-gray-200 border border-gray-400 rounded-lg" 
      placeholder="Search..."/>
    </div>
    <div className=' px-6'>
    <button
        type="button"
        className=" text-white bg-red-800 hover:bg-red-900 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
      >
        Connexion
      </button>
    </div>
      
      
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <a
            href="/"
            className=" text-xl py-2 pl-3 pr-4 text-black bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Accueil 
          </a>
        </li>
        <li>
          <a
            href="/Evenements"
            className=" text-xl py-2 pl-3 pr-4 text-black rounded  md:hover:text-blue-700 md:p-0  "
          >
            Évènements
          </a>
        </li>
        <li>
          <a
            href="/Cinema"
            className=" text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500   md:dark:hover:bg-transparent "
          >
            Cinéma 
          </a>
        </li>
        <li>
          <a
            href="/Apropos"
            className=" text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  md:dark:hover:bg-transparent "
          >
            A propos
          </a>
        </li>
        <li>
          <a
            href="/Contact"
            className=" text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    );
  
}
export default Navbar