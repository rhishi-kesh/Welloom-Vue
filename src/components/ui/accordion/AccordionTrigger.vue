<script setup>
import { reactiveOmit } from "@vueuse/core";
import { AccordionHeader, AccordionTrigger } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: [String, Object, Function], required: false },
  class: { type: null, required: false },
});

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger data-slot="accordion-trigger" v-bind="delegatedProps" :class="cn(
      'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45',
      props.class,
    )">
      <slot />
      <slot name="icon">
        <!-- Default icon (Plus) for closed state -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="transition-transform duration-200 data-[state=open]:hidden">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>

        <!-- Alternate icon (Minus) for open state -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="transition-transform duration-200 hidden data-[state=open]:block">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12h14" />
        </svg>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
