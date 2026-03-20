<script setup>
import QR from '../assets/image/qr.png';
import { SwitchRoot, SwitchThumb } from 'reka-ui';
import { ref } from 'vue';

const SettingStatus = ref(false);
function settingPopUp() {
    SettingStatus.value = true;
}

const allowDownload = ref(false)
const hasCoverPhoto = ref(false)
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
    <div class="text-center my-8 w-full md:w-[50%] m-auto">
        <div class="block md:grid grid-cols-3 gap-6 justify-between items-center">
            <a href="" class="block text-center">
                <div class="bg-primary text-secondary p-4 rounded text-center flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-eye text-center">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                    <p class="text-lg text-secondary!">Preview as guest</p>
                </div>
            </a>
            <a href="" class="block text-center">
                <div
                    class="bg-white text-primary border border-primary p-4 rounded text-center flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-photo">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 8h.01" />
                        <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                    </svg>
                    <p class="text-lg text-primary!">Preview as guest</p>
                </div>
            </a>
            <div @click="settingPopUp()" class="block text-center cursor-pointer">
                <div
                    class="bg-white text-primary border border-primary p-4 rounded text-center flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    </svg>
                    <p class="text-lg text-primary!">Setting</p>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-primary/70 z-50 flex items-center justify-center"
        v-if="SettingStatus">
        <div class="bg-white ps-10 pe-25 py-8 rounded-2xl relative">
            <h4 class="font-bold">Gallery Settings</h4>
            <div class="flex justify-start items-center mt-4">
                <div>
                    <SwitchRoot id="airplane-mode" v-model="allowDownload" name="allow-download"
                        class="w-8 h-5 shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800">
                        <SwitchThumb
                            class="w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full" />
                    </SwitchRoot>
                </div>
                <div>
                    <p class="text-primary! ms-2 text-md!">Guests can download photos</p>
                </div>
            </div>
            <div class="flex justify-start items-center mt-1">
                <div>
                    <SwitchRoot id="airplane-mode" v-model="hasCoverPhoto" name="has-cover-photo"
                        class="w-8 h-5 shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800">
                        <SwitchThumb
                            class="w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full" />
                    </SwitchRoot>
                </div>
                <div>
                    <p class="text-primary! ms-2 text-md!">Add a cover photo</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-3 mt-6">
                <button class="py-2 rounded-[10px] px-8 text-white bg-secondary cursor-pointer"
                    @click="SettingStatus = false">Cancel</button>
                <button
                    class="py-2 rounded-[10px] px-8 text-secondary bg-white border border-secondary cursor-pointer">Save</button>
            </div>
            <button class="text-stone-400 absolute right-5 top-4 cursor-pointer" @click="SettingStatus = false">
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
</template>