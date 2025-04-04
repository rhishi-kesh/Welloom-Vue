<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
import HowItWork from './components/HowItWork.vue';
</script>

<template>
  <Navbar />
  <Hero />
  <HowItWork />
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

h4 {
  font-size: 28px;
  color: var(--primary-color);
  font-family: serif;
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