<script setup>
import OTPPad2 from '@/components/ui/OTPPad2.vue';
import { RiArrowRightUpLine } from "@remixicon/vue";
</script>
<template>
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