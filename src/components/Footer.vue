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
    <section class="py-10 mt-15 mb-0">
        <div class="container mx-auto">
            <div class="block md:grid grid-cols-[4fr_3fr_3fr_3fr] text-black">
                <div class="">
                    <img :src="Logo" alt="" width="350px">
                </div>
                <div>
                    <h4>About</h4>
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
                <div>
                    <h4>Quick Links</h4>
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
                <div>
                    <h4>Contact Us</h4>
                    <p class="mt-3">125 Park Avenue 35th Floor, New York, NY 10017.</p>
                </div>
            </div>
            <hr class="my-10 border-stone-400">
            <div class="block md:flex justify-between items-center">
                <p class="text-stone-400 text-xl!">© 2025 Wedloom. All Right Reserved</p>
                <div>
                    <ul class="flex gap-x-5">
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