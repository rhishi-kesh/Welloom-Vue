<script setup>
import GetStartBtn from "@/sm_components/GetStartBtn.vue";
const steps = [
    {
        text: "QR code & private site",
    },
    {
        text: "1 year access (renews with subscription see below)",
    },
    {
        text: "Upload images",
    },
    {
        text: "Download all images and videos to your devices",
    },
    {
        text: "A virtual guest book for messages",
    },
    {
        text: "Live wedding slideshow",
    }
];
</script>
<template>
    <section class="bg-white py-10 my-15">
        <div class="container mx-auto">
            <div class="title text-center">
                <p class="!text-[var(--secondary-color)] !text-[16px]">Pricing</p>
                <h2 class="text-white mt-1">
                    <b class="text-[var(--primary-color)]">Our Pricing <i>Plan</i></b>
                </h2>
            </div>
            <div class="bg-[var(--bg-color)] rounded-4xl p-20 mt-10">
                <h2 class="text-center">$40</h2>
                <p class="text-center">(5-Day Upload Access From Date Of Launch)</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-5">
                    <div class="flex items-center gap-2 pb-3 mt-5 border-b-2 border-stone-400"
                        v-for="(step, index) in steps" :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-check text-green-500 font-weight-bold">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p class="text-black font-bold">{{ step.text }}</p>
                    </div>
                </div>
                <div class="text-center mt-15 w-100 md:w-[70%] m-auto">
                    <p>Preserve your memories securely in the cloud for convenient, lifelong access, anytime, anywhere,
                        for
                        just $5 per year after the initial one-year term.</p>
                </div>
            </div>
            <div class="mt-5 py-5">
                <GetStartBtn :icon="false" text="Get Started Now" />
            </div>
        </div>
    </section>
</template>