<template>
    <div class="item">
        <img :src="data.url" @click='openInner' />
        <div class="cont">
            <h1 class="title">{{ data.title }}</h1>
            <p class="desc">{{ data.desc }}</p>
            <div class="amount_cont">
                <span>X </span>
                <h4 class="amount"> {{ data.amount }}</h4>
            </div>

            <p>${{ data.price }}</p>
            <button @click="sendId">Delete</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    props: {
        data: {
            required: true,
            type: Object,
        }
    },
    methods: {
        openInner() {
            this.$router.push({ path: 'item', query: { plan: this.data.id } })
        },
        sendId() {
            this.$emit('getId', this.data.id)
        }

    }
}
</script>
<style scoped>
.cont {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;

}

button {
    background-color: red;
    border: 2px solid black;
    width: 50%;
    height: 30px;
    margin-top: 30px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(175, 2, 2);
}

button:active {
    background-color: rgb(134, 4, 4);
}

img {
    height: 200px;
    border-radius: 10px;
    cursor: pointer;
}

.amount_cont {
    display: flex;
    color: rgb(0, 150, 50)
}



.desc {
    margin-top: 10px;
}


.item {
    background-color: rgb(252, 252, 186);
    border-radius: 30px;
    width: 500px;
    margin-top: 50px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid black;

}
</style>
