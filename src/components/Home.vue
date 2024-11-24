<script>
import {useStore} from "vuex";
import store from "@/assets/store/index.js";

export default {
  computed: {
    store() {
      return store
    }
  },
}

</script>

<template>
  <div class="content-container">
    <div id="top">
      <div class="top-div">
        <div class="hero">Меня зовут Козловцев Игорь</div>
        <div class="hero-secondary">Я студент группы ИС/б-22-1-о</div>
        <div class="hero-secondary">ЛАБОРАТОРНАЯ РАБОТА №7 - Vue.js – маршрутизация и управление состоянием</div>
      </div>
      <img src="../assets/images/vue-blog-cover-2.png" title="Vue" alt="vue" width="640" height="480">
    </div>
    <div id="container-with-box">
      <div class="content-box">
        <div>
          <div class="hero-header">Хотите увеличить количество нажатий?</div>
          <div class="hero-secondary">Нажмите на эту кнопку!</div>
        </div>
        <button id="but2" @click="store.commit('increment')">Количество нажатий: {{store.state.count}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>