<script setup>
import StepImage from '@/assets/image/image3.png'
import StepCard from '@/sm_components/StepCard.vue';

const steps = [
    {
        icon: new URL('@/assets/image/step_icon-1.png', import.meta.url).href,
        title: "Sign Up",
        subtitle: "After signing up, you will immediately have access to your own virtual album, where you'll find your unique QR code and link."
    },
    {
        icon: new URL('@/assets/image/step_icon-2.png', import.meta.url).href,
        title: "Share",
        subtitle: "You can then share the QR code or link with your loved ones via messaging, email, or printed materials such as wedding invitations and greeting banners."
    },
    {
        icon: new URL('@/assets/image/step_icon-3.png', import.meta.url).href,
        title: "Upload",
        subtitle: "Guests can scan the QR code or visit the link to immediately start uploading moments captured at the wedding and leave messages-all without the need for an app or sign-up, making it easy to engage."
    },
];
</script>

<template>
    <section class="bg-[var(--primary-color)] rounded-2xl py-10 my-15">
        <div class="container mx-auto">
            <div class="title text-center">
                <p class="!text-[var(--secondary-color)] !text-[16px]">Process</p>
                <h2 class="text-white mt-1">
                    <b class="!text-white">How It <i>Works</i></b>
                </h2>
                <p class="!text-white w-100 md:w-[48%] m-auto mt-1">With just a few clicks, create a private album to
                    capture,
                    store,
                    and
                    cherish every special wedding
                    moment forever.</p>
            </div>
            <div class="steps grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                <StepCard v-for="(step, index) in steps" :key="index" :icon="step.icon" :title="step.title"
                    :subtitle="step.subtitle" />
            </div>
            <div class="w-full mt-8">
                <img :src="StepImage" alt="">
            </div>
        </div>
    </section>
</template>