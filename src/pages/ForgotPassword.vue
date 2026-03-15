<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
import LoginBGImage from '@/assets/image/login_image.jpg'
import Logo from '@/assets/image/logo.png'
</script>

<template>
    <div class="block md:grid grid-cols-2 h-screen">
        <div class="flex justify-center items-center h-full">
            <div class="px-5 md:px-0">
                <h4 class="text-center text-4xl! font-bold">Forgot Password?</h4>
                <p class="text-center text-sm! text-gray-600 mt-5 mb-8">Enter your email to get a verification code.
                </p>
                <form class="flex flex-col gap-4">
                    <div>
                        <label for="email" class="font-bold text-primary">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Email Address"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <button
                        class="btn w-full bg-primary py-4 px-4 text-white flex gap-2 justify-center rounded-4xl mt-4 items-center"
                        type="submit">
                        Submit
                        <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                    </button>
                </form>
            </div>
        </div>
        <div class="hidden md:block bg-gray-200 h-screen relative">
            <img :src="LoginBGImage" alt="Login Background" class="w-full h-full object-cover">
            <img :src="Logo" alt="Wedloom Logo" class="hidden md:block absolute top-5 right-70 w-50 object-contain">
        </div>
    </div>
</template>