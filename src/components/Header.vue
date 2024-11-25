<script setup>

</script>

<template>
  <header>
    <div class="hero-header">Моя страница</div>
    <div class="small-items">
      <div><router-link to="/" class="hero-secondary-but" title="Main-page">Главная страница</router-link></div>
      <div><router-link to="/about" class="hero-secondary-but" title="About">Обо мне</router-link></div>
      <div><router-link to="/interests" class="hero-secondary-but" title="Interests">Мои интересы</router-link></div>
      <div><router-link to="/studies" class="hero-secondary-but" title="Studies">Учёба</router-link></div>
      <div><router-link to="/gallery" class="hero-secondary-but" title="Gallery">Фотоальбом</router-link></div>
      <div><router-link to="/contact" class="hero-secondary-but" title="Contacts">Контакт</router-link></div>
      <div><router-link to="/test" class="hero-secondary-but" title="Test">Тест</router-link></div>
    </div>
  </header>
  <div id="filler-top"></div>
</template>

<style scoped>

</style>