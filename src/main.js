import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {createStore} from "vuex";
import store from "@/assets/store/index.js";

createApp(App).use(router, store).mount('#app')
