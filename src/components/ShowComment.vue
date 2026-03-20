<script setup>
import { ref } from 'vue';

const activeComment = ref(false);

const handleActiveComment = (commentId) => {
    activeComment.value = activeComment.value === commentId ? null : commentId;
}

const comments = ref([
    {
        id: 1,
        name: 'John Doe',
        time: '0 min ago',
        content: 'This is a sample comment. It can be replaced with actual user comments.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        time: '5 min ago',
        content: 'Another sample comment for demonstration purposes.'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        time: '10 min ago',
        content: 'Yet another comment to show how the component works.'
    }
]);
</script>

<template>
    <div class="w-full bg-white shadow-2xl rounded-2xl px-4 py-10 md:px-15 md:py-15">
        <h4 class="text-4xl! font-semibold mb-2 text-center">Comments</h4>
        <div class="space-y-4 mt-6">
            <div class="bg-white p-3 rounded shadow-md" @click="handleActiveComment(comment.id)"
                v-for="(comment, index) in comments" :key="comment.id">
                <div class="flex justify-start items-center gap-3">
                    <h5 class="text-lg! text-primary font-bold">{{ comment.name }}</h5>
                    <p class="text-sm!">{{ comment.time }}</p>
                </div>
                <p class="text-sm text-gray-700 mt-2">{{ comment.content }}</p>

                <hr v-show="index !== comments.length - 1 || activeComment === comment.id" class="bg-gray-400"
                    :class="activeComment === comment.id ? 'mt-2' : 'mt-5'">

                <div class="text-end mt-5" v-if="activeComment === comment.id">
                    <button class="bg-secondary text-white py-1 px-3 rounded transition">Delete</button>
                </div>
            </div>
            <button
                class="bg-primary/15 w-full py-3 px-4 rounded transition text-primary font-bold mt-4 cursor-pointer">Load
                More</button>
        </div>
    </div>
</template>