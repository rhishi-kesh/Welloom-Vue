<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import GetStardBtn from "@/sm_components/GetStardBtn.vue";
const faqs = [
    {
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        question: "How do I create an album?",
        answer: "You can create an album by signing up and following the prompts to set up your virtual album."
    },
    {
        question: "Can guests upload photos without an app?",
        answer: "Yes, guests can upload photos directly through a link or QR code without needing to download an app."
    },
    {
        question: "Is there a limit to the number of photos I can upload?",
        answer: "Currently, there is no limit to the number of photos you can upload to your album."
    }
]
</script>
<template>
    <section class="bg-[var(--primary-color)] rounded-4xl py-10 my-20">
        <div class="container mx-auto">
            <div class="title text-center">
                <h2 class="text-white mt-1">
                    <b class="!text-white">Frequently Asked <i>Questions</i></b>
                </h2>
                <p class="!text-white !text-base">Here are answers to some of our most frequently asked questions.</p>
            </div>
            <div class="!bg-white p-5 mt-15 rounded-2xl">
                <Accordion type="single" collapsible>
                    <AccordionItem :value="`item-${index}`" v-for="(faq, index) in faqs" :key="index">
                        <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
                        <AccordionContent>
                            {{ faq.answer }}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div class="mt-5 py-5">
                <GetStardBtn :icon="false" text="Get Started Now" />
            </div>
        </div>
    </section>
</template>