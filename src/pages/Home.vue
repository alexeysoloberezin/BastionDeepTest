<script setup lang="ts">
import TableMain from '@entities/ui/table/TableMain.vue';
import Text from '@shared/ui/typography/Text.vue';
import CreateAttack from '@widgets/Attack/CreateAttack.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function handleAction({ action, row }: any) {
  console.log('Действие:', action, 'для строки:', row)
}

function handleClickRow(row: any){
  console.log(row);
  if(row && row.id){
    router.push(`/simulation/${row.id}`)
  }
}
</script>

<template>
    <div class="">
      <!-- <MainCard v-for="item in els"
        :key="item.title"
        :icon="item.icon"
        :url="item.url"
        :title="item.title"
        :description="item.description"
        @click:button="router.push(item.url)"
      /> -->
      <div class="flex justify-space-bettwen w-full">
        <Text :as="'h2'" variant="h2" class="mb-3">Симулации Аттак</Text>
        
        <div class="ml-auto">
          <CreateAttack />
        </div>
      </div>
      <TableMain 
        :apiRoute="'/attack'"
        :actions="[
          { label: 'Запустить', action: 'start', variant: 'outline' },
        ]"
        @clickItem="handleClickRow"
        @action="handleAction"
      />
    </div>
</template>