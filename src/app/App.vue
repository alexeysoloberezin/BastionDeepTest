<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import DefaultLayout from '@app/layouts/default.vue';
import { Toaster } from "@shared/ui/sonner"

const route = useRoute();
const layout = computed(() => {
  return route.meta?.layout || DefaultLayout;
});

</script>

<template>
  <img src="/gradient.jpg" alt="" class="absolute opacity-[.23] top-0 left-0 w-full h-full object-cover">
  <component :is="layout" class="app-layout">
    <Toaster richColors  theme="dark" />
    <router-view />
  </component>
</template>

<style scoped>
</style>
