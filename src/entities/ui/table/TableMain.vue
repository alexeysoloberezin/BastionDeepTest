<script setup lang="ts">
import TableUi from '@shared/ui/table/TableUi.vue'
import { useTable } from '@shared/services/useTable/useTable'
import TablePagination from "@entities/ui/table/TablePagination.vue"
import Filters from '@entities/ui/table/Filters.vue'
import Input from '@shared/ui/input/Input.vue'
import { type ButtonVariants } from '@shared/ui/button'

const props = defineProps<{
    apiRoute: string,
    actions?: {label: string, action: string, variant?:  ButtonVariants['variant']}[]
}>()

const emit = defineEmits<{
  (e: 'action', payload: { action: string, row: any }): void
  (e: 'clickItem', payload: any): void
}>()

const {columns, page, totalPages, data, perPage, isLoading, isError} 
    = useTable({apiRoute: props.apiRoute})
</script>

<template>
    <div class="bg-card p-3 rounded-lg">
        <div class="flex justify-space-bettwen gap-2 mb-2 items-center">
            <Input placeholder="Поиск" />
            <Filters />
        </div>
        <TableUi 
            :columns="columns"
            :loading="isLoading"
            :rowsCount="perPage"
            :data="data" 
            :actions="actions"
            @clickItem="(v) => emit('clickItem', v)"
            @action="(v) => emit('action', v)"
        />
        <TablePagination 
            class="mt-3"
            v-if="!isLoading"
            v-model:page="page"
            :totalPages="totalPages"
            :perPage="perPage"
        ></TablePagination>
    </div>
  
</template>