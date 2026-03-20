<script setup>
import Logo from '@/assets/image/logo.png'
import GetStartBtn from '@/components/ui/GetStartBtn.vue';
import { RiUserReceivedLine } from '@remixicon/vue';
import { ref } from 'vue';

let navStatus = ref(false);
function NavigationOpen() {
    navStatus.value = true;
}
function NavigationClose() {
    navStatus.value = false;
}
</script>

<template>
    <nav class="py-2 bg-primary text-white font-bold" id="nav">
        <div class="container px-4 flex justify-between items-center mx-auto relative">
            <div>
                <router-link :to="{ name: 'home' }">
                    <img :src="Logo" alt="" width="150">
                </router-link>
            </div>
            <div class="absolute -top-70 left-0 bg-primary w-full md:w-auto md:static py-5 md:py-0 transition ease-in duration-50"
                :class="['md:block', navStatus ? 'block top-20' : '-top-70']">
                <ul class="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
                    <li>
                        <router-link to="/#how-it-works">How It Works</router-link>
                    </li>
                    <li>
                        <router-link to="/#pricing">Pricing</router-link>
                    </li>
                    <li>
                        <router-link to="/#faq">FAQs</router-link>
                    </li>
                    <li>
                        <router-link to="/#contact">Contact</router-link>
                    </li>
                </ul>

                <!-- buttons -->
                <div class="md:hidden flex justify-center mt-5 items-center gap-5">
                    <router-link :to="{ name: 'login' }" class="flex justify-center items-center gap-1">
                        <svg class="block" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.01762 7.50143C8.01762 5.15451 9.92043 3.25195 12.2677 3.25195C14.6149 3.25195 16.5177 5.15451 16.5177 7.50143C16.5177 9.84834 14.6149 11.7509 12.2677 11.7509C9.92043 11.7509 8.01762 9.84834 8.01762 7.50143ZM12.2677 4.75177C10.7489 4.75177 9.51763 5.98283 9.51763 7.50143C9.51763 9.02002 10.7489 10.2511 12.2677 10.2511C13.7865 10.2511 15.0177 9.02002 15.0177 7.50143C15.0177 5.98283 13.7865 4.75177 12.2677 4.75177Z"
                                fill="#F2F8FF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.26762 14.7505C7.02497 14.7505 6.01759 15.7578 6.01759 17.0002V18.1884C6.01759 18.2065 6.03071 18.2219 6.04856 18.2248C10.1674 18.8972 14.368 18.8972 18.4868 18.2248C18.5046 18.2219 18.5177 18.2065 18.5177 18.1884V17.0002C18.5177 15.7578 17.5104 14.7505 16.2677 14.7505H15.9268C15.9005 14.7505 15.8743 14.7547 15.8492 14.7629L14.9837 15.0455C13.2189 15.6217 11.3165 15.6217 9.55162 15.0455L8.68609 14.7629C8.66104 14.7547 8.63485 14.7505 8.60849 14.7505H8.26762ZM4.51758 17.0002C4.51758 14.9294 6.19653 13.2507 8.26762 13.2507H8.60849C8.79299 13.2507 8.97632 13.2799 9.1517 13.3371L10.0172 13.6197C11.4795 14.0971 13.0558 14.0971 14.5181 13.6197L15.3836 13.3371C15.559 13.2799 15.7423 13.2507 15.9268 13.2507H16.2677C18.3388 13.2507 20.0178 14.9294 20.0178 17.0002V18.1884C20.0178 18.9415 19.4719 19.5837 18.7285 19.705C14.4496 20.4035 10.0857 20.4035 5.80686 19.705C5.06347 19.5837 4.51758 18.9415 4.51758 18.1884V17.0002Z"
                                fill="#F2F8FF" />
                        </svg>
                        <span class="block">Log in</span>
                    </router-link>
                    <GetStartBtn url="/dashboard" />
                </div>
                <!-- <div class="flex md:hidden justify-center items-center gap-5 mt-5">
                    <a href="" class="flex justify-center items-center gap-1">
                        <RiUserReceivedLine color="rgba(255,255,255,1)" />
                    </a>
                    <GetStartBtn text="Logout" />
                </div> -->
            </div>

            <!-- Buttons -->
            <div class="hidden md:flex justify-end items-center gap-5">
                <router-link :to="{ name: 'login' }" class="flex justify-center items-center gap-1">
                    <svg class="block" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.01762 7.50143C8.01762 5.15451 9.92043 3.25195 12.2677 3.25195C14.6149 3.25195 16.5177 5.15451 16.5177 7.50143C16.5177 9.84834 14.6149 11.7509 12.2677 11.7509C9.92043 11.7509 8.01762 9.84834 8.01762 7.50143ZM12.2677 4.75177C10.7489 4.75177 9.51763 5.98283 9.51763 7.50143C9.51763 9.02002 10.7489 10.2511 12.2677 10.2511C13.7865 10.2511 15.0177 9.02002 15.0177 7.50143C15.0177 5.98283 13.7865 4.75177 12.2677 4.75177Z"
                            fill="#F2F8FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.26762 14.7505C7.02497 14.7505 6.01759 15.7578 6.01759 17.0002V18.1884C6.01759 18.2065 6.03071 18.2219 6.04856 18.2248C10.1674 18.8972 14.368 18.8972 18.4868 18.2248C18.5046 18.2219 18.5177 18.2065 18.5177 18.1884V17.0002C18.5177 15.7578 17.5104 14.7505 16.2677 14.7505H15.9268C15.9005 14.7505 15.8743 14.7547 15.8492 14.7629L14.9837 15.0455C13.2189 15.6217 11.3165 15.6217 9.55162 15.0455L8.68609 14.7629C8.66104 14.7547 8.63485 14.7505 8.60849 14.7505H8.26762ZM4.51758 17.0002C4.51758 14.9294 6.19653 13.2507 8.26762 13.2507H8.60849C8.79299 13.2507 8.97632 13.2799 9.1517 13.3371L10.0172 13.6197C11.4795 14.0971 13.0558 14.0971 14.5181 13.6197L15.3836 13.3371C15.559 13.2799 15.7423 13.2507 15.9268 13.2507H16.2677C18.3388 13.2507 20.0178 14.9294 20.0178 17.0002V18.1884C20.0178 18.9415 19.4719 19.5837 18.7285 19.705C14.4496 20.4035 10.0857 20.4035 5.80686 19.705C5.06347 19.5837 4.51758 18.9415 4.51758 18.1884V17.0002Z"
                            fill="#F2F8FF" />
                    </svg>
                    <span class="block">Log in</span>
                </router-link>
                <GetStartBtn url="/dashboard" />
            </div>
            <!-- <div class="hidden md:flex justify-end items-center gap-5">
                <a href="" class="flex justify-center items-center gap-1">
                    <RiUserReceivedLine color="rgba(255,255,255,1)" />
                </a>
                <GetStartBtn text="Logout" />
            </div> -->

            <!-- Mobile Device Hamburger -->
            <div class="flex justify-center items-center md:hidden mt-2">
                <button @click="NavigationOpen" v-if="!navStatus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
                <button @click="NavigationClose" v-if="navStatus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    cursor: pointer;
}
</style>