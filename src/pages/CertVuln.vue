<script setup lang="ts">
import TableMain from '@entities/ui/table/TableMain.vue'
import { Text } from '@shared/ui/typography'
</script>

<template>
  <div>
    <Text :as="'h2'" variant="h2" class="mb-3">CertVuln</Text>
    <TableMain :apiRoute="'/certvuln'"/>
  </div>
</template>
