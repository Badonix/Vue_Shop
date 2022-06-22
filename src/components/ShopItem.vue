<template>
    <div class="item">
        <img @click="openInner" :src='data.url' alt="error" />
        <h1>{{ data.title }}</h1>
        <p>{{ data.desc }}</p>
        <h4>${{ data.price }}</h4>
        <button @click="openInner">View</button>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            required: true,
            type: Object,
        }
    },
    data() {
        return {

        }
    },
    methods: {
        openInner() {
            this.$router.push({ path: 'item', query: { plan: this.data.id } })

        }
    }
}
</script>
<style scoped>
img {
    width: 320px;
    border-radius: 10px;
    cursor: pointer;
}

.item {
    width: 350px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: rgb(221, 221, 221);
    align-items: center;
    margin-left: 50px;
    justify-content: space-around;
    padding: 20px;
    margin-top: 30px;
}

button {
    width: 100%;
    background-color: rgb(100, 100, 255);
    border-radius: 20px;
    color: white;
    font-size: 25px;
    cursor: pointer;
    height: 50px;
    margin-top: 30px;
}

h1 {
    margin-top: 20px;
}

h4 {
    color: rgb(87, 204, 87);
    font-size: 25px;
    font-weight: bold;
}

button:hover {
    background-color: rgb(77, 77, 252);
}

button:active {
    background-color: rgb(31, 31, 231);
}
</style>