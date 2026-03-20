<script setup>
import Image from '../assets/image/image1.png';
import { ref } from 'vue';

const props = defineProps({
    Blur: {
        type: Boolean,
        default: false
    }
})

const DeleteModalStatus = ref(false);
function DeletePopUp(id) {
    DeleteModalStatus.value = true;
    console.log(id);
}
</script>
<template>
    <div class="px-4">
        <p class="my-8 text-center">It appears that this gallery is empty. When photos or videos are uploaded,
            they will be
            shown here.</p>
        <div class="w-full block md:grid grid-cols-3 gap-3 relative" :class="Blur ? 'blur-sm' : ''">
            <div v-if="Blur" class="absolute top-0 left-0 w-full h-full bg-white/50 z-20"></div>
            <div v-for="i in 9" :key="i" class="relative mt-2 md:mt-0">
                <img :src="Image" alt="Image" class="w-full h-125 object-cover rounded">
                <button
                    class="flex gap-1 text-xl rounded-4xl border border-white px-11 font-bold py-3 absolute bottom-11 left-20 md:left-41 text-white cursor-pointer"
                    @click="DeletePopUp(i)">
                    Delete
                    <RiArrowRightUpLine />
                </button>
            </div>
        </div>
    </div>
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-primary/70 z-50 flex items-center justify-center"
        v-if="DeleteModalStatus">
        <div class="bg-white p-6 rounded-2xl relative">
            <h4 class="font-bold">Wedding Image</h4>
            <p class="text-lg! my-1">Are you sure you want to delete this image?</p>
            <div class="flex justify-center items-center mt-4">
                <button
                    class="flex gap-1 text-xl rounded-4xl border border-secondary px-8 font-bold py-2 bg-secondary text-white cursor-pointer">
                    <span>Confirm</span>
                    <RiArrowRightUpLine />
                </button>
            </div>
            <button class="text-stone-400 absolute right-5 top-4 cursor-pointer" @click="DeleteModalStatus = false">
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