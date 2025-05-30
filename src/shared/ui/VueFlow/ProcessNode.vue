<script setup>
import { computed, toRef } from 'vue'
import { Handle, useNodeConnections } from '@vue-flow/core'
import { ProcessStatus } from './useRunProcess'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  sourcePosition: {
    type: String,
  },
  attackId: {
    type: String,
    required: true,
  },
  targetPosition: {
    type: String,
  },
})

const sourceConnections = useNodeConnections({
  handleType: 'target',
})

const targetConnections = useNodeConnections({
  handleType: 'source',
})

const isStartNode = toRef(() => sourceConnections.value.length <= 0)

const isEndNode = toRef(() => targetConnections.value.length <= 0)

const status = toRef(() => props.data.status)

const bgColor = computed(() => {
  if (isStartNode.value) {
    return '#2563eb'
  }

  switch (status.value) {
    case ProcessStatus.ERROR:
      return '#f87171'
    case ProcessStatus.FINISHED:
      return '#42B983'
    case ProcessStatus.CANCELLED:
      return '#fbbf24'
    default:
      return '#4b5563'
  }
})

const processLabel = computed(() => {
  if (isStartNode.value) {
    return props.attackId
  }

  switch (status.value) {
    case ProcessStatus.ERROR:
      return `❌ ${props.data.ip}`
    case ProcessStatus.SKIPPED:
      return `🚧 ${props.data.ip}`
    case ProcessStatus.CANCELLED:
      return `🚫 ${props.data.ip}`
    case ProcessStatus.FINISHED:
      return `😎 ${props.data.ip}`
    default:
      return `🏠 ${props.data.ip}`
  }
})
</script>

<template>
  <div
    class="process-node"
    :style="{ backgroundColor: bgColor, boxShadow: status === ProcessStatus.RUNNING ? '0 0 10px rgba(0, 0, 0, 0.5)' : '' }"
  >
    <Handle v-if="!isStartNode" type="target" :position="targetPosition">
      <span v-if="status === null">📥 </span>
    </Handle>

    <Handle v-if="!isEndNode" type="source" :position="sourcePosition" />

    <div v-if="status === ProcessStatus.RUNNING" class="spinner" />
    <span v-else>
      {{ processLabel }}
    </span>
  </div>
</template>

<style scoped>
.process-node {
  padding: 10px;
  border-radius: 99px;
  width: 100px;
  cursor: pointer;
  height: 24px;
  display: flex;
  font-size: 8px;
  align-items: center;
  justify-content: center;
}

.process-node .vue-flow__handle {
  border: none;
  height: unset;
  width: unset;
  background: transparent;
}
</style>
