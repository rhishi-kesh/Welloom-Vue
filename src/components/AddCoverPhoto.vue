<script setup>
import uploadCoverBGImage from '../assets/image/uploadCoverBGImage.jpg';
</script>
<template>
    <div class="w-full h-150 bg-cover bg-center flex flex-col gap-4 items-center justify-center rounded-2xl"
        :style="{ backgroundImage: `url(${uploadCoverBGImage})` }">
        <div class="border-dashed border-2 p-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-camera">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
        </div>
        <p class="text-primary! text-sm!">
            <span class="font-bold">Add Cover Photo</span>
            (Less than 2MB)
        </p>
    </div>
</template>