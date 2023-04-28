<template>
    <div class="div">
<Navbar/>
        <div class="mt-2 flex content-between flex-wrap">
        <div class="container w-full">
            <Cart v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="container ml-4 ">
            <p class="text-xl  font-bold my-2">TOTAL: <span class="text-blue-600">R${{ totalAmount }}</span></p>
            <button class="w-full justify-self-center bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 rounded">Comprar</button>
        </div>
    </div>

    </div>

</template>

<script>
import Cart from './cart'
import Navbar from '@/components/Navbar.vue'
export default {
    //layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
    components: { Cart },
    computed: {
        products() {
            return this.$store.getters['cart/cart']
        },
        totalAmount() {
            return this.$store.getters['cart/totalAmount']
        }
    },
    mounted() {
    const hello = 'Hello World!'
    debugger
    this.message = Cart
  }
    
}
</script>