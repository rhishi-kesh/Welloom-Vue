<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: String,
    title: String,
    subtitle: String
});
</script>

<template>
    <div class="rounded-2xl bg-white p-6 text-center">
        <div class="text-center flex justify-center items-center">
            <img :src="icon" alt="icon" width="50">
        </div>
        <h4 class="my-3">{{ title }}</h4>
        <p>{{ subtitle }}</p>
    </div>
</template>