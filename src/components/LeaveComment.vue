<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
import TopImage from '../assets/image/image2.png';
</script>

<template>
    <div class="mb-5 md:mb-15 px-4">
        <img :src="TopImage" alt="">
    </div>
    <div class="px-4">
        <div class="w-full border border-primary rounded-2xl py-5 md:py-10 px-4 md:px-15">
            <h4 class="text-center font-bold">Leave a message to the Bride & Groom</h4>
            <form action="" class="mt-6">
                <div class="block md:grid grid-cols-2 gap-4 justify-center items-center">
                    <div class="mt-4">
                        <label for="" class="font-bold text-primary">First Name*</label>
                        <input type="text" class="w-full bg-primary/10 rounded px-3 py-2 mt-1" placeholder="First Name">
                    </div>
                    <div class="mt-4">
                        <label for="" class="font-bold text-primary">Last Name*</label>
                        <input type="text" class="w-full bg-primary/10 rounded px-3 py-2 mt-1" placeholder="Last Name">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="" class="font-bold text-primary">Message*</label>
                    <textarea name="" id="" cols="30" rows="5" class="w-full bg-primary/10 rounded px-3 py-2 mt-1"
                        placeholder="Write your message here..."></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-secondary text-white py-4 px-28 rounded-4xl mt-4 hover:bg-primary/80 flex items-center gap-2">
                        <span>Submit</span>
                        <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>