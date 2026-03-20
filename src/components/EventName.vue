<script setup>
import { ref } from 'vue';

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
</script>
<template>
    <div v-if="!isEditing" class="flex justify-center gap-1 items-center mt-8 text-primary! font-bold px-4">
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
</template>