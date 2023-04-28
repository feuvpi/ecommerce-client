<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-white">
      <div class="w-full max-w-md mx-auto">
        <div class="bg-orange-500 shadow-lg rounded-lg px-8 py-10">
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-center text-white">Bem vindo de volta!</h2>
          </div>
          <form>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="usernameOrEmail">
                E-mail
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usernameOrEmail" type="text" placeholder="Username or Email">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Senha
              </label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between">
              <button class="bg-white text-orange-500 hover:text-orange-600 font-bold py-2 px-4 rounded-md border-2 border-orange-500 focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2" type="button">
                Entrar
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-white hover:text-orange-500" href="#">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  