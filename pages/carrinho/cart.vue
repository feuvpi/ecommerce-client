<template>

        <div class="flex-row place-items-center place-content-center justify-center justify-items-center flex">
        <div class="container max-w-sm w-full flex mb-4 place-content-center ">
            <figure class="object-fill w-1/2 shadow-lg">
            <img class="w-full rounded" :src="this.imageUrl" alt="Img" />
        </figure>
        <div class="flex flex-col justify-between ml-4 w-1/2">
            <div>
                <p class="text-gray-900 font-bold text-lg">{{ product.name }}</p>
                <p class="text-blue-600">{{ product.price.toFixed(2) }}€</p>
            </div>
            <div class="inline-flex">
                <button class="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-l" @click="removeFromCart">-</button>
                <span class="bg-orange-400 py-2 px-4 text-white">{{ product.quantity || '0' }}</span>
                <button class="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-r" @click="addToCart">+</button>
            </div>
        </div>

        </div>
    </div>


    
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            
            defaultImage: 'https://via.placeholder.com/150',
        }
    },
    methods: {
        removeFromCart() {
            this.$store.dispatch('cart/removeFromCart', this.product).then(() => {
                this.$store.dispatch('products/addToStock', this.product)
            }).catch(err => console.log(err))
        },
        
        addToCart() {
            this.$store.dispatch('cart/addToCart', this.product).then(() => {
                this.$store.dispatch('products/takeFromStock', this.product)
            }).catch(err => console.log(err))
        }
    },
    computed: {
    imageUrl() {
      return this.product.image_url || this.defaultImage
    },
    mounted() {
    const hello = 'Hello World!'
    debugger
    this.message = hello
  }
  }
}
</script>