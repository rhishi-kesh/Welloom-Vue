<script setup>
import { set } from '@vueuse/core';
import { ref, onMounted } from 'vue'
const otpProps = defineProps({
    length: {
        type: Number,
        default: 4
    }
})

const otpArray = ref([]);
const container = ref();
const otpEmit = defineEmits(['entered']);

onMounted(() => {
    for (let i = 0; i < otpProps.length; i++) {
        otpArray.value[i] = null;
    }
})

function handleEnter(e, i) {
    const children = container.value.children;
    const keyPressed = e.key;
    if (i > 0 && (keyPressed === "Backspace" || keyPressed === "Delete")) {
        otpArray.value[i] = null;
        setTimeout(() => {
            children[i - 1].focus();
        }, 100);
    } else {
        const matched = keyPressed.match(/^[0-9]$/);
        if (!matched) {
            otpArray.value[i] = null;
            return;
        } else if (i < otpProps.length - 1) {
            setTimeout(() => {
                children[i + 1].focus();
            }, 10);
        }
        checkOTP();
    }

}

function checkOTP() {
    const children = container.value.children;
    let flag = true;

    for (let i = 0; i < otpProps.length - 1; i++) {
        if (otpArray.value[i] == null) {
            children[i].classList.add('border-red-500');
            flag = false;
        } else {
            children[i].classList.remove('border-red-500');
        }
    }

    if (flag) {
        otpEmit('entered', otpArray.value.join(''));
    }
}
</script>
<template>
    <div ref="container" class="flex gap-4 items-center justify-center">
        <input type="text" v-for="n in length" :key="n" maxlength="1" @keyup="(e) => handleEnter(e, n - 1)"
            v-model="otpArray[n - 1]"
            class="w-16 md:w-25 h-11 md:h-15 border underline border-gray-300 text-center text-xl focus:outline-none focus:ring-2 focus:ring-primary rounded-[10px]">
    </div>
</template>