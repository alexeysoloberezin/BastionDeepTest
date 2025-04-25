<script setup lang="ts">
import TableSceleton from '@entities/ui/table/TableSceleton.vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shared/ui/table'
import Button from '@shared/ui/button/Button.vue';
import { type ButtonVariants } from '@shared/ui/button';
import { computed } from 'vue';

const props = defineProps<{
  data: { [key: string]: any }[]; 
  columns: { key: string, name: string, format?: (v: any) => string }[]; 
  rowsCount: number,
  loading: boolean,
  actions?: { label: string, action: string, variant?:  ButtonVariants['variant'] }[];
}>()

const emit = defineEmits<{
  (e: 'action', payload: { action: string, row: any }): void
  (e: 'clickItem', payload: any): void
}>()

const columnsData = computed(() => {
  const {actions, columns} = props
  if(actions?.length){
    return [...columns, {key: 'action', name: 'Действия'}]
  }
  return columns
})
</script>

<template>
 
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-for="col in columnsData" :key="col.key" class="w-[100px]">
            {{ col.name }}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody v-if="!loading">
          <TableRow v-for="row in data" :key="JSON.stringify(row)" @click.stop="emit('clickItem', row)">
            <TableCell v-for="col in columns" :key="col.key" class="font-medium">
              {{ col?.format  ? col.format(row[col.key]) : row[col.key] }}
            </TableCell>

            <TableCell v-if="actions?.length" class="font-medium max-w-[120px]">
              <div class="flex flex-wrap gap-2">
                <Button
                    v-for="act in actions"
                    :key="act.action"
                    :variant="act?.variant"
                    @click.stop="emit('action', { action: act.action, row })"
                  >
                    {{ act.label }}
                </Button>
              </div>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <TableSceleton v-if="loading" :rows="rowsCount"/>


</template>
