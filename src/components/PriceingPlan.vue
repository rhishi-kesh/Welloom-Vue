<script setup>
import GetStartBtn from '@/components/ui/accordion/GetStartBtn.vue';
</script>

<template>
    <section class="py-10 my-15">
        <div class="container mx-auto">
            <div class="priceing-header text-center">
                <p class="text-secondary">Pricing</p>
                <h2><b>Our Pricing</b> <i>Plan</i></h2>
            </div>
            <div class="mt-10 px-20 py-10 bg-[var(--secondary-color)] text-center rounded-4xl">
                <h2 class="font-extrabold">$40</h2>
                <p>(5-Day Upload Access From Date Of Launch)</p>
                <div class="mt-5 grid grid-cols-2 bold gap-25">
                    <div class="flex justify-start items-center border-b-[1px] border-b-stone-500 pb-5 gap-2">
                        <i class="pi pi-check !text-green-500 !font-extrabold"></i>
                        <p>QR code & private site</p>
                    </div>
                    <div class="flex justify-start items-center border-b-[1px] border-b-stone-500 pb-5 gap-2">
                        <i class="pi pi-check !text-green-500 !font-extrabold"></i>
                        <p>QR code & private site</p>
                    </div>
                </div>
                <p class="mt-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quae maxime
                    repellendus provident qui veniam quo pariatur, suscipit odit necessitatibus asperiores, animi dolore
                    dicta obcaecati.</p>
            </div>
            <div class="mt-8">
                <GetStartBtn :icon="false" url="login" text="Get Started Now" />
            </div>
        </div>
    </section>
</template>