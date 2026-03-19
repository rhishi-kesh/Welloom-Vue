<script setup>
import OTPPad2 from '@/sm_components/OTPPad2.vue';
import { RiArrowRightUpLine } from "@remixicon/vue";
</script>
<template>
    <div class="text-start w-full mt-12">
        <p class="mb-4 text-md font-bold">
            Personal Message
        </p>
        <p class="px-8 py-5 bg-[#F2F8FF]">
            We’d love for you to be part of our special moments! Easily upload and share your photos with us.
            <br>
            Click the upload button below to add your memories. <br>
            Looking forward to seeing all the amazing moments you’ve captured! <br>
        </p>
    </div>
    <div class="text-center my-8 w-full md:w-[30%] m-auto">
        <b class="text-2xl">Enter The Code</b>
        <OTPPad2 class="mt-6" />
        <button
            class="btn w-full bg-secondary py-4 px-4 text-white flex gap-2 justify-center rounded-4xl items-center mt-6"
            type="submit">
            Submit
            <RiArrowRightUpLine color="rgba(255,255,255,1)" />
        </button>

    </div>
</template>