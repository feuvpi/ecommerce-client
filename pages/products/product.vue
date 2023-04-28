<template>
    <section class="relative rounded-lg overflow-hidden shadow-lg bg-white">
        <div class="flex flex-wrap">
            <figure class="w-full">
                <img class="w-full h-56 object-cover" :src="this.imageUrl" alt="Imagem do Produto" />
                <div class="absolute top-0 right-0 mt-2 mr-2" @click="$store.dispatch('products/updateFavoriteProduct', product)">
                    <svg :class="{ 'fill-current text-red-500': (product.favorite != 0) }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                </div>
            </figure>
            <div class="flex flex-wrap w-full p-4">
                <div class="w-full font-bold text-xl mb-2">{{ product.productName }}</div>
                <p class="w-full text-gray-700 text-base mb-4">{{ product.productDescription }}</p>
                <div class="w-full flex justify-between">
                    <p class="text-blue-600 text-lg leading-none">R${{ product.price }}</p>
                    <div class="flex items-center space-x-2">
                        <span v-if="product.stock > 0" class="text-sm">{{ product.stock }} disponíveis</span>
                        <span v-else class="text-sm text-red-600">Indisponível</span>
                        <button class="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" 
                            @click="addToCart(product)">
                            <svg class="fill-current text-white mr-2" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M22.5 14H14v8.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V14H.5a.5.5 0 01-.5-.5v-4A.5.5 0 01.5 9H9V.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V9h8.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5z" fill-rule="evenodd"/>
                            </svg>
                            <span>Adicionar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            successMessage: null,
            defaultImage: 'https://via.placeholder.com/150',
            errorMessage: null
        }
    },
    computed: {
    imageUrl() {
      return this.product.image_url || this.defaultImage
    },
  },
    methods: {
        addToCart(product) {
            if (product.stock > 0) {
                this.$store.dispatch('cart/addToCart', product).then(() => {
                    this.$store.dispatch('products/takeFromStock', product)
                    this.successMessage = 'Success!'
                    setTimeout(() => { this.successMessage = null }, 3000)
                })
            } else {
                this.errorMessage = 'No items left!'
                setTimeout(() => { this.errorMessage = null }, 3000)
            }
        }
    }
}


</script>

