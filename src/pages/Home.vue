<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue';
import HowItWork from '../components/HowItWork.vue';
import Pricing from '../components/Pricing.vue';
import Faq from '../components/Faq.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Navbar />
    <Hero />
    <HowItWork />
    <Pricing />
    <Faq />
    <Contact />
    <Footer />
</template>

<style>
* {
    font-family: var(--font-inter);
}

b {
    font-family: serif;
    color: var(--color-primary);
}

i {
    font-family: var(--font-satisfy);
    color: var(--color-secondary);
}

h2 {
    font-size: 50px;
}

h3 {
    font-size: 48px;
}

h4 {
    font-size: 28px;
    color: var(--color-primary);
    font-family: serif;
}

p {
    font-size: 22px;
    line-height: 35.2px;
    color: var(--color-black);
}

a {
    font-size: 16px;
}
</style>