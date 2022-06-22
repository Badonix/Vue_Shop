<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Store from './store/index'
export default {

  name: 'App',
  components: {

  },
  methods: {

  },
  data() {
    return {

    }
  },
  mounted() {
    if (localStorage.getItem('cartItems')) {
      Store.commit('replaceProduct', JSON.parse(localStorage.getItem('cartItems')))
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
