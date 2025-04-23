<script setup lang="ts">
import { textVariants, type TextVariants } from "./index.ts";

defineProps<{
  as?: keyof HTMLElementTagNameMap; // Позволяет передавать HTML-тег
  variant?: TextVariants["variant"]; // Используем варианты стилей
}>();
</script>

<template>
  <component
    :is="as || 'h1'"
    :class="textVariants({ variant })"
  >
    <slot></slot>
  </component>
</template>
