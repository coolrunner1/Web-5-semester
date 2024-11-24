<script setup>
import Form from './components/Form.vue'
import Test from './components/Test.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

