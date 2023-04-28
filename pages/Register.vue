<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-white">
      <div class="w-full max-w-md mx-auto">
        <div class="bg-orange-500 shadow-lg rounded-lg px-8 py-10">
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-center text-white">CRIAR UMA CONTA</h2>
          </div>
          <form>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
              </label>
              <input
                v-model="username"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Insira um e-mail valido"
              >
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Senha
              </label>
              <input
                v-model="password"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Defina uma senha"
              >
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="passwordConfirmation">
                Confirmar senha
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordConfirmation"
                type="password"
                placeholder="Confirme sua senha"
              >
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between">
              <button
                @click="register"
                class="bg-white text-orange-500 hover:text-orange-600 font-bold py-2 px-4 rounded-md border-2 border-orange-500 focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2"
                type="button"
              >
                Criar Conta
              </button>
              <nuxt-link to="/login" class="inline-block align-baseline font-bold text-sm text-white hover:text-orange-500">
                Já possui uma conta?
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  


<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        //console.log("Entrei")
        await this.$axios.post('/auth/register', {
          username: this.username,
          password: this.password
        })

        await this.$auth.loginWith('jwt', {
          data: {
          email: this.username,
          password: this.password
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
  