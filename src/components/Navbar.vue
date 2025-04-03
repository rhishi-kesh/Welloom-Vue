<script setup>
import Logo from '@/assets/image/logo.png'
import GetStardBtn from '@/sm_components/GetStardBtn.vue';
</script>

<template>
    <nav class="py-3 bg-[var(--primary-color)] text-white font-bold" :style="{ fontFamily: 'var(--font-inter)' }">
        <div class="container flex justify-between items-center mx-auto">
            <div>
                <img :src="Logo" alt="" width="120">
            </div>
            <div>
                <ul class="flex justify-center items-center gap-10">
                    <li>
                        <a href="">How It Works</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">FAQs</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="flex justify-end items-center gap-5">
                <a href="" class="flex justify-center items-center gap-1">
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
                </a>
                <GetStardBtn />
            </div>
        </div>
    </nav>
</template>