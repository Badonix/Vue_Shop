<template>
    <div class="home">
        <div class="top">
            <router-link class="router" to="/home">
                <h1 id="title">Shop</h1>
            </router-link>

            <div class="cart_container">
                <span :class="{ 'active': active }" id="button_badge">{{ getProductLength }}</span>
                <router-link class="router" to="/cart">
                    <p id="cart">Cart</p>
                </router-link>

            </div>
        </div>

    </div>
</template>
<script>

import Store from '../store/index'
export default {
    data() {
        return {
            active: false
        }
    },
    computed: {
        getProductLength() {
            return Store.getters.getProducts.length
        }
    },
    watch: {
        getProductLength: function () {
            this.active = true
            setTimeout(() => {
                this.active = false
            }, 1000)
        }
    }
}
</script>
<style scoped>
.router {
    text-decoration: none;
}

.home {
    font-family: sans-serif;
}


.cart_container .active {
    transform: scale(1.3);
    background-color: rgb(236, 154, 0);
}

* {
    transition: .3s ease;
}

#button_badge {
    background-color: red;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 10px;
}

#title {
    cursor: pointer;
    font-size: 50px;
    font-weight: bold;
    color: white;

}


.cart_container {
    align-items: center;
    display: flex;

}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: rgb(250, 148, 174);
}

#cart {
    color: yellow;
    font-size: 30px;
    cursor: pointer;
}
</style>