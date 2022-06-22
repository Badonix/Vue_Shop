<template>
    <div>
        <Nav />
        <div class="content">
            <div class="left">
                <img :src="url" />
            </div>
            <div class="right">
                <h1>{{ title }}</h1>
                <h4>{{ desc }}
                </h4>
                <h3 id="price">${{ balance }}</h3>
                <div class="counter">
                    <button :disabled="disableBut" @click="reduce">-</button>
                    <p>{{ amount }}</p>
                    <button :disabled="disableBut" @click="add">+</button>
                </div>
                <button :disabled="disableBut" class="add" @click="addItem">Add to Cart</button>
            </div>
        </div>

    </div>
</template>
<script>
import prData from '../products.json'
import Nav from '../components/MyNavbar'
import Store from '../store/index'
export default {
    components: {
        Nav
    },
    methods: {
        disableButton() {
            Store.getters.getProducts.forEach((element) => {
                if (element.id === this.currentData[0].id) {
                    this.disableBut = true
                }
            })
        },
        reduce() {
            if (this.amount == 1) {
                return
            } else {
                this.amount--,
                    this.reduceBalance()
            }

        },
        add() {
            this.amount++,
                this.incrementBalance()
        },
        incrementBalance() {
            this.balance += this.currentData[0].price
        },
        reduceBalance() {
            this.balance -= this.currentData[0].price
        },
        addItem() {
            this.addedItem = {
                id: this.currentData[0].id,
                title: this.currentData[0].title,
                desc: this.currentData[0].desc,
                url: this.currentData[0].url,
                price: this.balance,
                amount: this.amount,
            }
            Store.commit('setProduct', this.addedItem)
            localStorage.setItem('cartItems', JSON.stringify(Store.state.cartProducts))
            this.disableButton()
        }
    },
    data() {
        return {
            disableBut: false,
            balance: 0,
            currentData: [],
            title: '',
            desc: '',
            price: 0,
            url: '',
            amount: 1,
            addedItem: null,
        }
    },
    mounted() {

        this.currentData = prData.filter(el => el.id === parseInt(this.$route.query.plan))
        this.title = this.currentData[0].title;
        this.desc = this.currentData[0].desc;
        this.price = this.currentData[0].price;
        this.url = this.currentData[0].url;
        this.balance = this.currentData[0].price;
        this.disableButton()
    }
}
</script>
<style scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
}

.counter {
    display: flex;
}

.right h3 {
    font-size: 20px;
}

.counter button {
    width: 40px;
    height: 40px;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    border: 1px solid black;
    background-color: rgb(245, 136, 136);

}

.counter button:hover {
    background-color: rgb(172, 82, 82)
}

.counter button:active {
    background-color: rgb(100, 47, 47)
}



.counter p {
    font-size: 30px;
    text-align: center;
    margin: 0 50px;
}

.add {
    width: 300px;
    height: 75px;
    background-color: greenyellow;
    border: 5px solid green;
    cursor: pointer;
    border-radius: 20px;
    font-size: 30px;
}

.add:hover {
    background-color: green;
}

.add:active {
    background-color: darkgreen;
}

.left img {
    height: 480px;
    border-radius: 10px;
    border: 1px solid black;
}

.right {
    max-width: 900px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.right h1 {
    font-size: 60px;
}
</style>