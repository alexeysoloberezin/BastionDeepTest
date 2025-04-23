<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { 
  PaginationEllipsis, 
  PaginationFirst, 
  PaginationLast, 
  PaginationList, 
  PaginationListItem, 
  PaginationNext, 
  PaginationPrev, 
  PaginationRoot 
} from 'reka-ui'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const page = defineModel<number>('page', { default: 1 }) // Текущая страница
const props = defineProps<{ totalPages: number; perPage: number }>()

// Функции смены страниц
const goToNextPage = () => {
  if (page.value < props.totalPages / props.perPage) page.value++
}

const goToPrevPage = () => {
  if (page.value > 1) page.value--
}

// Обработчик нажатий клавиш
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    goToNextPage()
  } else if (event.key === 'ArrowLeft') {
    goToPrevPage()
  }
}

// Добавление и удаление слушателя событий
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <PaginationRoot
    v-model:page="page"
    :total="totalPages"
    :sibling-count="1"
    :items-per-page="perPage"
    show-edges
    :default-page="1"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1 text-stone-700 dark:text-white">
      <PaginationFirst 
        class="w-9 h-9 cursor-pointer flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition disabled:opacity-50 rounded-lg"
      >
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>

      <PaginationPrev 
        class="w-9 h-9 cursor-pointer flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition mr-4 disabled:opacity-50 rounded-lg"
      >
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>

      <template v-for="(p, index) in items">
        <PaginationListItem
          v-if="p.type === 'page'"
          :key="index"
          class="w-9 h-9 border cursor-pointer dark:border-stone-800 rounded-lg data-[selected]:!bg-sidebar-primary data-[selected]:shadow-sm data-[selected]:text-blackA11 hover:bg-white dark:hover:bg-stone-700/70 transition"
          :value="p.value"
        >
          {{ p.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="p.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>

      <PaginationNext 
        class="w-9 h-9 cursor-pointer flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition ml-4 disabled:opacity-50 rounded-lg"
      >
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>

      <PaginationLast 
        class="w-9 h-9 cursor-pointer flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-stone-700/70 transition disabled:opacity-50 rounded-lg"
      >
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
