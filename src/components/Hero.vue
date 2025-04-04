<script setup>
import HeroImage from '@/assets/image/image4.png'
import GetStardBtn from '@/sm_components/GetStardBtn.vue';
</script>

<template>
    <div class="container mx-auto">
        <div class="text-center py-8 w-[75%] m-auto">
            <h2 class="leading-[60px]">
                <b> QR code-powered <i>photo album</i> that lets guests <i>effortlessly</i> upload and
                    share memories in one <i>private, organized space</i>.
                </b>
            </h2>

            <p class="mt-8">Millions of wedding photos stay unseen in camera rolls, and even the best photographers can
                miss the most
                heartfelt moments.</p>

            <p class="mt-3">Our platform lets you effortlessly collect and share every memory, ensuring nothing is lost
                and the moments that matter most are captured forever.</p>

            <h2 class="mt-5">
                <b>No App Needed!</b>
            </h2>

            <div class="mt-5">
                <GetStardBtn :icon="false" text="Get Started Now" />
            </div>

        </div>
        <div class="w-full mt-5">
            <img :src="HeroImage" alt="" class="w-full">
        </div>
    </div>
</template>