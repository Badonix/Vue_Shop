<template>
    <div class="app">
        <Nav />
        <div class="cont">
            <div class="left">
                <h1 v-if="getData.length == 0" style="color:red; margin-top:150px;">Cart is Empty</h1>
                <Item v-for="(item, index) in getData" :key="index" :data="item" @getId="deleteItem" />
            </div>
            <div class="right">
                <h1>Cart</h1>
                <h4>Full Balance</h4>
                <h2>$ {{ getFullBalance }}</h2>
            </div>
        </div>


    </div>
</template>
<script>
import Store from '../store/index'
import Nav from '../components/MyNavbar'
import Item from '../components/CartItem'
export default {
    components: {
        Nav,
        Item,
    },
    data() {
        return {
            fullBalance: 0,
        }
    },
    methods: {
        deleteItem(id) {
            Store.commit('removeProduct', id)
            localStorage.setItem("cartItems", JSON.stringify(Store.state.cartProducts))
        }
    },
    computed: {
        getData() {
            return Store.getters.getProducts
        },
        getFullBalance() {
            let balance = 0;
            this.getData.forEach(item => {
                balance += item.price;
            })
            return balance
        }
    }
}
</script>
<style scoped>
h1 {
    font-size: 100px;
}

h4 {
    margin-top: 100px;
    font-size: 30px;
}

h2 {
    font-size: 35px;
    margin-top: 10px;
    color: green;
}

.right {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-top: 100px;
    align-items: center;
}

.cont {
    display: flex;
}
</style>