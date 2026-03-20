<script setup>
import HeroImage from '@/assets/image/image4.png'
import GetStartBtn from '@/components/ui/GetStartBtn.vue';
</script>

<template>
    <section>
        <div class="container mx-auto px-4">
            <div class="text-center md:pt-24 pt-8 pb-4 md:pb-8 w-full md:w-[70%] m-auto">
                <h2 class="leading-8 md:leading-15 text-3xl! md:text-[50px]!">
                    <b>A QR code-powered <i>photo album</i> that lets guests <i>effortlessly</i> upload and
                        share memories in one <i>private, organized space</i>.
                    </b>
                </h2>

                <p class="mt-5 md:mt-8 text-sm! md:text-[22px]!">Millions of wedding photos stay unseen in camera rolls,
                    and
                    even the best
                    photographers
                    can
                    miss the most
                    heartfelt moments.</p>

                <p class="mt-2 md:mt-8 text-sm! md:text-[22px]!">Our platform lets you effortlessly collect and share
                    every memory, ensuring nothing is
                    lost
                    and the moments that matter most are captured forever.</p>

                <h2 class="leading-8 md:leading-15 text-2xl! md:text-[50px]! mt-3">
                    <b>No App Needed!</b>
                </h2>

                <div class="mt-5">
                    <GetStartBtn :icon="false" url="login" text="Get Started Now" />
                </div>

            </div>
            <div class="w-full mt-0 md:mt-5">
                <img :src="HeroImage" alt="" class="w-full">
            </div>
        </div>
    </section>
</template>