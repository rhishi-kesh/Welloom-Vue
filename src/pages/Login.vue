<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
import LoginBGImage from '@/assets/image/login_image.jpg'
import Logo from '@/assets/image/logo.png'
</script>

<template>
    <div class="block md:grid grid-cols-2 h-screen">
        <div class="flex justify-center items-center h-full">
            <div class="px-5 md:px-0">
                <h4 class="text-center text-5xl! font-bold">Log In</h4>
                <p class="text-center text-sm! text-gray-600 mt-8 mb-10">Join Wedloom and create a stunning collection
                    of
                    memories
                </p>
                <form class="flex flex-col gap-4">
                    <div>
                        <label for="email" class="font-bold text-(--primary-color)">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Email Address"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="password" class="font-bold text-(--primary-color)">Password</label>
                        <input type="password" id="password" placeholder="Enter Password"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <p class="text-center text-sm! text-gray-600 my-2">Forgot your Password? <a href=""
                            class="font-bold text-(--primary-color)">Click Here</a></p>
                    <button
                        class="btn w-full bg-(--primary-color) py-4 px-4 text-white flex gap-2 justify-center rounded-4xl items-center"
                        type="submit">
                        Log In
                        <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                    </button>
                </form>
                <p class="text-center text-sm! text-gray-600 mt-8">New User? <router-link :to="{ name: 'register' }"
                        class="font-bold text-(--primary-color) underline">Create Account</router-link> </p>
            </div>
        </div>
        <div class="hidden md:block bg-gray-200 h-screen relative">
            <img :src="LoginBGImage" alt="Login Background" class="w-full h-full object-cover">
            <img :src="Logo" alt="Wedloom Logo" class="hidden md:block absolute top-5 right-70 w-50 object-contain">
        </div>
    </div>
</template>