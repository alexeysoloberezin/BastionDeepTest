<script setup lang="ts">
import { Skeleton } from '@shared/ui/skeleton'
const props = defineProps(['rows'])
</script>

<template>
  <div class="w-full flex flex-col gap-1" style="width: 100%;">
    <Skeleton v-for="row in 5" :key="row" class="w-full h-5 rounded-full" />
  </div>
</template>