<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
import LoginBGImage from '@/assets/image/login_image.jpg'
import Logo from '@/assets/image/logo.png'
</script>

<template>
    <div class="block md:grid grid-cols-2">
        <div class="flex justify-center items-center h-full">
            <div class="px-5 md:px-0 pt-10 md:pt-20 pb-5">
                <h4 class="text-center text-5xl! font-bold">Sign Up</h4>
                <p class="text-center text-sm! text-gray-600 mt-8 mb-10">Join Wedloom and create a stunning collection
                    of
                    memories
                </p>
                <form class="flex flex-col gap-4">
                    <div>
                        <label for="first-name" class="font-bold text-(--primary-color)">First Name</label>
                        <input type="text" id="first-name" placeholder="Enter First Name"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="last-name" class="font-bold text-(--primary-color)">Last Name</label>
                        <input type="text" id="last-name" placeholder="Enter Last Name"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="phone" class="font-bold text-(--primary-color)">Phone Number</label>
                        <input type="text" id="phone" placeholder="Enter Phone Number"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="email" class="font-bold text-(--primary-color)">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Email Address"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="wedding-date" class="font-bold text-(--primary-color)">Select Your Wedding
                            Date</label>
                        <input type="date" id="wedding-date"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="password" class="font-bold text-(--primary-color)">Password</label>
                        <input type="password" id="password" placeholder="Enter Password"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <div>
                        <label for="confirm-password" class="font-bold text-(--primary-color)">Confirm Password</label>
                        <input type="password" id="confirm-password" placeholder="Confirm Password"
                            class="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1" />
                    </div>
                    <button
                        class="btn w-full bg-(--primary-color) py-4 px-4 text-white flex gap-2 justify-center rounded-4xl items-center mt-6"
                        type="submit">
                        Sign Up
                        <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                    </button>
                </form>
                <p class="text-center text-sm! text-gray-600 mt-2">Or Go to <router-link :to="{ name: 'home' }"
                        class="font-bold text-(--primary-color) underline">Home</router-link></p>
                <p class="text-center text-sm! text-gray-600 mt-8 md:mt-15">Already have an account? <router-link
                        :to="{ name: 'login' }" class="font-bold text-(--primary-color) underline">Log In</router-link>
                </p>
            </div>
        </div>
        <div class="hidden md:block bg-gray-200 h-full relative">
            <img :src="LoginBGImage" alt="Login Background" class="w-full h-full object-cover">
            <img :src="Logo" alt="Wedloom Logo" class="hidden md:block absolute top-5 right-70 w-50 object-contain">
        </div>
    </div>
</template>