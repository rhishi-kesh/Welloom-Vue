<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
</script>

<template>
  <Navbar />
  <Hero />
</template>

<style>
* {
  font-family: var(--font-inter);
}

b {
  font-family: serif;
  color: var(--primary-color);
}

i {
  font-family: var(--font-satisfy);
  color: var(--secondary-color);
}

h2 {
  font-size: 50px;
}

h3 {
  font-size: 48px;
}

p {
  font-size: 22px;
  line-height: 35.2px;
  color: var(--black-color);
}

a {
  font-size: 16px;
}
</style>