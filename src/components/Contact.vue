<script setup>
import GetStartBtn from "@/sm_components/GetStartBtn.vue";


</script>
<template>
    <section class="bg-white rounded-4xl py-10 my-20">
        <div class="container mx-auto shadow p-10 rounded-2xl">
            <div class="title text-center">
                <h2 class="text-white mt-1">
                    <b class="text-[var(--primary-color)]">Contact Us</b>
                </h2>
            </div>
            <form action="" method="POST" class="w-full md:w-[70%] m-auto mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    <input type="text" placeholder="Name*"
                        class="w-full border-b-2 border-stone-400 p-3 text-black placeholder:text-stone-600">
                    <input type="email" placeholder="Email*"
                        class="w-full border-b-2 border-stone-400 p-3 text-black placeholder:text-stone-600">
                </div>
                <textarea name="" id="" rows="8" placeholder="Message"
                    class="w-full border-b-2 border-stone-400 p-3 mt-5 text-black placeholder:text-stone-600"></textarea>
                <div class="mt-5 py-5">
                    <GetStartBtn :icon="false" text="Submit Now" />
                </div>
            </form>
        </div>
    </section>
</template>