<template>

    <div>
        <Nav />
        <div class="search">
            <input v-model="searchWord" placeholder="search..." type="search" />
        </div>
        <div class="items">
            <Item v-for="(item, index) in getData" :key='index' :data='item' />
            <h1 v-if="errorMSG">egeti ragac argvaqs shopshi :(((</h1>
        </div>

    </div>

</template>
<script>
import Item from '../components/ShopItem'
import Nav from '../components/MyNavbar'
import prData from '../products.json'
export default {
    methods: {

    },
    components: {
        Nav,
        Item,

    },
    data() {

        return {
            productData: prData,
            searchWord: "",
            errorMSG: false,
        }
    },
    mounted() {

    },
    computed: {
        getData: function () {
            return this.productData.filter(el => el.title.toLowerCase().includes(this.searchWord))
        }
    },
    watch: {
        getData: {
            immediate: true,
            handler: function () {
                if (this.getData.length === 0) {
                    this.errorMSG = true
                } else {
                    this.errorMSG = false
                }
            }
        }
    }
}
</script>
<style scoped>
input {
    width: 250px;
    height: 25px;
    font-size: 20px;
    outline: none;
}

.items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
</style>
