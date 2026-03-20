<script setup>
import StepImage from '@/assets/image/image3.png'
import StepCard from '@/components/ui/StepCard.vue';

const steps = [
    {
        icon: new URL('@/assets/image/step_icon-3.png', import.meta.url).href,
        title: "Sign Up",
        subtitle: "After signing up, you will immediately have access to your own virtual album, where you'll find your unique QR code and link."
    },
    {
        icon: new URL('@/assets/image/step_icon-2.png', import.meta.url).href,
        title: "Share",
        subtitle: "You can then share the QR code or link with your loved ones via messaging, email, or printed materials such as wedding invitations and greeting banners."
    },
    {
        icon: new URL('@/assets/image/step_icon-1.png', import.meta.url).href,
        title: "Upload",
        subtitle: "Guests can scan the QR code or visit the link to immediately start uploading moments captured at the wedding and leave messages-all without the need for an app or sign-up, making it easy to engage."
    },
];
</script>

<template>
    <section class="bg-primary rounded-4xl py-5 md:py-10 my-5 md:my-15" id="how-it-works">
        <div class="container mx-auto px-4">
            <div class="title text-center">
                <p class="text-secondary text-[16px]!">Process</p>
                <h2 class="text-white mt-1 text-3xl! md:text-[50px]!">
                    <b class="text-white!">How It <i>Works</i></b>
                </h2>
                <p class="text-white! w-full md:w-[35%] m-auto mt-1 text-sm! md:text-[16px]!">With just a few
                    clicks,
                    create a
                    private album to
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
            <div class="w-full mt-5 md:mt-8">
                <img :src="StepImage" alt="">
            </div>
        </div>
    </section>
</template>