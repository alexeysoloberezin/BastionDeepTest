<script setup lang="ts">
import MainCard from '@shared/ui/card/MainCard.vue'
import items from '@app/configs/sidebar';
import { useRouter } from 'vue-router';
import { Keyboard } from 'lucide-vue-next';

const router = useRouter()

const els = [...items, {
  title: 'Горячие клавиши',
  icon: Keyboard,
  url: '/hotkeys',
  description: 'Горячие клавиши для быстрого перемещения по приложению'
}]
</script>

<template>
    <div class="grid grid-cols-4 gap-4">
      <MainCard v-for="item in els"
        :key="item.title"
        :icon="item.icon"
        :url="item.url"
        :title="item.title"
        :description="item.description"
        @click:button="router.push(item.url)"
      />
    </div>
</template>