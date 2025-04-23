<script setup lang="ts">
import TableUi from '@shared/ui/table/TableUi.vue';
import { Text } from '@shared/ui/typography'

const hotkeys = [
  {
    key: '← →',
    description: 'Изменять страницу таблицы (Стрелки влево и вправо)'
  },
  {
    key: '↑ ↓',
    description: 'Перейти на страницу вверх и вниз (Порядок из навигации)'
  },
  {
    key: 'Ctrl + S', 
    description: 'Открыть поиск'
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <Text :as="'h2'" variant="h2" class="mb-6">Горячие клавиши</Text>
    
    <div class="space-y-4">
      <div v-for="hotkey in hotkeys" :key="hotkey.key" class="flex items-center justify-between p-4 rounded-lg bg-card">
        <kbd class="px-4 py-1.5 text-sm font-semibold rounded bg-muted">
          {{ hotkey.key }}
        </kbd>
        <span class="text-card-foreground">{{ hotkey.description }}</span>
      </div>
    </div>
  </div>
</template>
