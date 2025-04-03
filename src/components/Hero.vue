<script setup>
import HeroImage from '@/assets/image/image4.png'
import GetStardBtn from '@/sm_components/GetStardBtn.vue';
</script>

<template>
    <div class="container mx-auto">
        <div class="text-center">
            <h2>A QR code-powered photo album that lets guests effortlessly upload and
                share memories in one private, organized space.
            </h2>

            <p>Millions of wedding photos stay unseen in camera rolls, and even the best photographers can miss the most
                heartfelt moments.</p>

            <p>Our platform lets you effortlessly collect and share every memory, ensuring nothing is lost
                and the moments that matter most are captured forever.</p>

            <h2>No App Needed!</h2>

            <div>
                <GetStardBtn :icon="false" />
            </div>

            <img :src="HeroImage" alt="" class="w-full">
        </div>
    </div>
</template>