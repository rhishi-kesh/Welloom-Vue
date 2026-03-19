<script setup>
import { ref, computed } from 'vue';
import { RiArrowRightUpLine } from "@remixicon/vue";

const props = defineProps({
    Editing: {
        type: Boolean,
        default: false
    }
})

const isEditing = ref(false)
const title = ref('Wedding Ceremony')
const save = () => {
    isEditing.value = false
}

const fileInput = ref(null);
const files = ref([])
const openFilePicker = () => {
    fileInput.value.click();
}
const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles.length) return

    files.value = Array.from(selectedFiles)
}
const fileCount = computed(() => files.value.length);
</script>
<template>
    <div v-if="!isEditing" class="flex justify-center gap-1 items-center mt-8 text-primary! font-bold">
        <p class="text-primary!">{{ title }}</p>

        <svg @click="isEditing = true" v-if="props.Editing" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="cursor-pointer">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
            <path d="M16 19h6" />
        </svg>
    </div>
    <div v-else class="flex justify-center gap-1 items-center mt-8 text-primary!">
        <input v-model="title" type="text" class="border px-4 py-2">

        <button @click="save" class="px-4 py-2 border border-primary text-white bg-primary rounded cursor-pointer">
            Save
        </button>
    </div>
    <div>
        <input type="file" ref="fileInput" class="hidden" accept="image/*,video/*" multiple
            @change="handleFileChange" />
        <div class="text-center mt-8 w-full bg-primary text-white p-8 outline-dashed outline-2 outline-primary flex flex-col items-center justify-center gap-5 cursor-pointer"
            @click="openFilePicker">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-upload">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 9l5 -5l5 5" />
                <path d="M12 4l0 12" />
            </svg>
            <b class="text-white! text-2xl">Click to upload image/video</b>
        </div>
        <p v-if="fileCount > 0" class="text-left text-primary!">
            {{ fileCount }} file{{ fileCount > 1 ? 's' : '' }} selected
        </p>
    </div>
    <div class="text-center my-10 w-full md:w-[30%] m-auto">
        <div class="flex justify-between items-center gap-2">
            <button class="btn bg-secondary text-white py-4 px-8 flex rounded-4xl" @click="submitFiles">
                <span class="me-2">See All Images</span>
                <RiArrowRightUpLine />
            </button>
            <button class="btn bg-white text-secondary py-4 px-8 flex rounded-4xl border border-secondary"
                @click="submitFiles">
                <span class="me-2">See All Comments</span>
                <RiArrowRightUpLine />
            </button>
        </div>
    </div>
</template>