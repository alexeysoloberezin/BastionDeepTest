<script setup lang="ts">
import TableSceleton from '@entities/ui/table/TableSceleton.vue';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shared/ui/table'

const props = defineProps<{
  data: { [key: string]: any }[]; 
  columns: { key: string, name: string, format?: (v: any) => string }[]; 
  rowsCount: number,
  loading: boolean
}>()


</script>

<template>
 
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-for="col in columns" :key="col.key" class="w-[100px]">
            {{ col.name }}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody v-if="!loading">
          <TableRow v-for="row in data" :key="JSON.stringify(row)">
            <TableCell v-for="col in columns" :key="col.key" class="font-medium">
              {{ col?.format  ? col.format(row[col.key]) : row[col.key] }}
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <TableSceleton v-if="loading" :rows="rowsCount"/>


</template>
