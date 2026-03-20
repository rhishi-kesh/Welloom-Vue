<script setup>
import QR from '../assets/image/qr.png';
</script>
<template>
    <div class="text-center p-8 w-full md:w-[50%] m-auto border-primary border">
        <h4>Share QR Code</h4>
        <img :src="QR" alt="QR Code" class="w-64 h-64 m-auto" />
        <div class="w-full md:w-[60%] m-auto">
            <div class="flex justify-center items-center">
                <input type="text" value="https://www.example.com" readonly
                    class="w-full p-2 border border-gray-300 rounded" />
                <button class="ml-2 p-2 border border-stone-400 text-primary rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-copy">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                        <path
                            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                    </svg>
                </button>
            </div>
            <button class="w-full mt-4 p-2 border bg-primary text-white rounded flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-share">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span class="font-bold">Share Link</span>
            </button>
            <button
                class="w-full mt-4 p-2 border bg-white border-primary text-primary rounded flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                </svg>
                <span class="font-bold">Download QR Code</span>
            </button>
            <button
                class="w-full mt-4 p-2 border bg-white border-primary text-primary rounded flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-refresh">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                </svg>
                <span class="font-bold">Re Generate QR Code</span>
            </button>
        </div>
    </div>
</template>