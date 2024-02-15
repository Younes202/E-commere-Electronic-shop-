<template>
    <div class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 hidden" id="mobile-menu">
      <div class="flex justify-end p-4">
        <button id="close-mobile-menu" class="text-white focus:outline-none">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul class="text-white">
        <li>
          <a href="#" style="font-size: 25px;" class="nav-link block py-2 px-5 text-white bg-blue-700 rounded text-lg md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#" class="nav-link block py-2 px-5">Contact Us</a>
        </li>
        <li>
          <a href="#" class="nav-link block py-2 px-5">Collections</a>
        </li>
      </ul>
    </div>
  </template>
  