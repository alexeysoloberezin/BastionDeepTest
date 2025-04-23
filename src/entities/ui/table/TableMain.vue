<script setup lang="ts">
import TableUi from '@shared/ui/table/TableUi.vue'
import { useTable } from '@shared/services/useTable/useTable'
import TablePagination from "@entities/ui/table/TablePagination.vue"
import Filters from '@entities/ui/table/Filters.vue'

const props = defineProps(['apiRoute'])
const {columns, page, totalPages, data, perPage, isLoading, isError} 
    = useTable({apiRoute: props.apiRoute})

</script>

<template>
    <div class="bg-card p-3 rounded-lg">
        <div class="flex justify-end items-center">
            <Filters />
        </div>
        <TableUi 
            :columns="columns"
            :loading="isLoading"
            :rowsCount="perPage"
            :data="data" 
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