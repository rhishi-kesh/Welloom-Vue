<script setup>
import Logo from '@/assets/image/footer_logo.png';
import {
    RiFacebookCircleFill,
    RiInstagramLine,
    RiTwitterXLine,
    RiLinkedinBoxFill,
    RiYoutubeFill
} from "@remixicon/vue";
</script>
<template>
    <section class="py-5 md:py-10 mt-5 md:mt-15 mb-0">
        <div class="container mx-auto px-4">
            <div class="block md:grid grid-cols-[4fr_3fr_3fr_3fr] text-black">
                <div class="flex md:block justify-center">
                    <img :src="Logo" alt="" class="w-40 md:w-75 text-center md:text-start">
                </div>
                <div class="mt-5">
                    <h4 class="text-2xl! md:text-[28px]">About</h4>
                    <ul>
                        <li class="mt-3">
                            <router-link :to="{ name: 'home' }" class="text-xl! text-stone-700">Home</router-link>
                        </li>
                        <li class="mt-3">
                            <router-link to="/#faq" class="text-xl! text-stone-700">FAQ</router-link>
                        </li>
                        <li class="mt-3">
                            <router-link to="/#contact" class="text-xl! text-stone-700">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div class="mt-5">
                    <h4 class="text-2xl! md:text-[28px]">Quick Links</h4>
                    <ul>
                        <li class="mt-3">
                            <router-link to="/#how-it-works" class="text-xl! text-stone-700">Pricing</router-link>
                        </li>
                        <li class="mt-3">
                            <router-link to="/dynamic/terms-of-conditions" class="text-xl! text-stone-700">Terms of
                                Conditions</router-link>
                        </li>
                        <li class="mt-3">
                            <router-link to="/dynamic/privacy-policy" class="text-xl! text-stone-700">Privacy
                                Policy</router-link>
                        </li>
                    </ul>
                </div>
                <div class="mt-5 text-start">
                    <h4 class="text-2xl! md:text-[28px]">Contact Us</h4>
                    <p class="mt-1 md:mt-3">125 Park Avenue 35th Floor, New York, NY 10017.</p>
                </div>
            </div>
            <hr class="my-5 md:my-10 border-stone-400">
            <div class="block md:flex justify-between items-center">
                <p class="text-stone-400 text-xl! text-center md:text-start">© 2025 Wedloom. All Right Reserved</p>
                <div>
                    <ul class="flex gap-x-5 justify-center md:justify-end mt-4 md:mt-0">
                        <li>
                            <a href="" target="_blank" class="text-black">
                                <RiFacebookCircleFill color="#E8A08F" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" class="text-stone-400 hover:text-blue-500">
                                <RiInstagramLine color="#E8A08F" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" class="text-stone-400 hover:text-blue-500">
                                <RiTwitterXLine color="#E8A08F" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" class="text-stone-400 hover:text-blue-500">
                                <RiLinkedinBoxFill color="#E8A08F" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <RiYoutubeFill color="#E8A08F" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>