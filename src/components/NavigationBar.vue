<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="elctr.png" class="h-8 sm:h-12 md:h-16" alt="Electronic Shop Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Electronic Shop</span>
        </a>
        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div class="hidden w-full md:flex items-center justify-center md:w-auto" id="navbar-multi-level">
          <ul class="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#" style="font-size: 25px;" class="nav-link block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Home</a>
            </li>
            <li>
              <a href="#" style="font-size: 25px;" class="nav-link block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Contact Us</a>
            </li>
            <li>
              <a href="#" style="font-size: 25px;" class="nav-link block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Collections</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  