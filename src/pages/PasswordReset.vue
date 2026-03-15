<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
import LoginBGImage from '@/assets/image/login_image.jpg'
import Logo from '@/assets/image/logo.png'
</script>

<template>
    <div class="block md:grid grid-cols-2">
        <div class="flex justify-center items-center h-screen">
            <div class="px-5 md:px-0">
                <h4 class="text-center text-5xl! font-bold mb-10">Reset Password</h4>
                <form class="flex flex-col gap-4">
                    <div>
                        <label for="password" class="font-bold text-primary">New Password</label>
                        <input type="password" id="password" placeholder="Enter New Password"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="confirm-password" class="font-bold text-primary">Confirm Password</label>
                        <input type="password" id="confirm-password" placeholder="Confirm Password"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <button
                        class="btn w-full bg-primary py-4 px-4 text-white flex gap-2 justify-center rounded-4xl items-center mt-6"
                        type="submit">
                        Submit
                        <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                    </button>
                </form>
            </div>
        </div>
        <div class="hidden md:block bg-gray-200 h-full relative">
            <img :src="LoginBGImage" alt="Login Background" class="w-full h-full object-cover">
            <img :src="Logo" alt="Wedloom Logo" class="hidden md:block absolute top-5 right-70 w-50 object-contain">
        </div>
    </div>
</template>