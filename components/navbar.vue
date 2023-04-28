<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex-grow">
          <nuxt-link class="text-xl font-bold text-gray-900" to="/">SHOP</nuxt-link>
        </div>
        <div class="flex items-center justify-items-center">
          <div class="relative mx-auto">
            <input
              class="w-96 mr-6 place-self-center justify-self-center w-200 border rounded-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Procurar...">
          </div>
          <div>
            <a href="#" class="text-gray-700">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".7"
                   viewBox="0 0 24 24" class="w-10 h-10">
                   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> 
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
