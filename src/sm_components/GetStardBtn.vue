<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: Boolean,
        default: true
    },
    text: {
        type: String,
        default: "Get Started"
    }
});
</script>

<template>
    <div class="flex justify-center items-center gap-0">
        <a href="" class="flex justify-center items-center gap-1 bg-[var(--secondary-color)] px-5 py-2 rounded-3xl">
            <span class="block text-white">{{ text }}</span>
            <svg v-if="icon" class="block" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                fill="none">
                <path
                    d="M11.4385 6.276L5.70048 12.014L4.75781 11.0713L10.4951 5.33333H5.43848V4H12.7718V11.3333H11.4385V6.276Z"
                    fill="white" />
            </svg>
        </a>

        <a v-if="!icon" href="" class="flex justify-center items-center bg-[var(--secondary-color)] p-3 rounded-full">
            <svg class="block" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                fill="none">
                <path
                    d="M11.4385 6.276L5.70048 12.014L4.75781 11.0713L10.4951 5.33333H5.43848V4H12.7718V11.3333H11.4385V6.276Z"
                    fill="white" />
            </svg>
        </a>
    </div>
</template>