interface CartProduct {
    id: number,
    productName: string,
    image_url: string,
    price: number,
    stock: number,
    quantity: number
}

// Function to calculate the total amount and quantity of items in the cart
export const totals = (payloadArr: CartProduct[]): { amount: string, quantity: number } => {
    const totalAmount = payloadArr.map(cartArr => cartArr.price * cartArr.quantity).reduce((a,b) => a + b, 0)
    const totalQuantity = payloadArr.map(cartArr => cartArr.quantity).reduce((a,b) => a + b, 0)
    return {
        amount: totalAmount.toFixed(2),
        quantity: totalQuantity
    }
}

interface CartState {
    cart: CartProduct[],
    totalAmount: string,
    totalQuantity: number
}

const state = (): CartState => ({
    cart: [],
    totalAmount: '0',
    totalQuantity: 0
})

const mutations = {
    // Add product to cart or increment its quantity if it already exists in the cart
    'ADD_TO_CART' (state: CartState, payload: CartProduct) {
        const isInCart = state.cart.find(product => product.id == payload.id)
        if (isInCart) {
            state.cart.map(product => {
                if (product.id == payload.id) {
                    product.quantity++
                }
            })
        } else {
            state.cart = [...state.cart, {
                id: payload.id,
                productName: payload.productName,
                image_url: payload.image_url,
                price: payload.price,
                stock: payload.stock,
                quantity: 1
            }]
        }
        // Update total amount and quantity of items in the cart
        const { amount, quantity } = totals(state.cart)
        state.totalAmount = amount
        state.totalQuantity = quantity
    },
    // Remove product from cart or decrement its quantity if it has more than one
    'REMOVE_FROM_CART' (state: CartState, payload: CartProduct) {
        if (payload.quantity > 1) {
            state.cart.map(product => {
                if (product.id == payload.id) {
                    product.quantity--
                }
            })
        } else {
            const id = state.cart.findIndex(product => product.id == payload.id)
            state.cart.splice(id, 1)
        }
        // Update total amount and quantity of items in the cart
        const { amount, quantity } = totals(state.cart)
        state.totalAmount = amount
        state.totalQuantity = quantity
    }
}

const actions = {
    addToCart({ commit }: { commit: Function }, payload: CartProduct) {
        commit('ADD_TO_CART', payload)
    },
    removeFromCart({ commit }: { commit: Function }, payload: CartProduct) {
        commit('REMOVE_FROM_CART', payload)
    }
}

const getters = {
    cart: (state: CartState) => state.cart,
    totalAmount: (state: CartState) => state.totalAmount,
    totalQuantity: (state: CartState) => state.totalQuantity
}

export default { state, mutations, actions, getters }