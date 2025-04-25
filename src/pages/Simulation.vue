<template>
   <div class="layout-flow">
    <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      :default-edge-options="{ type: 'animation', animated: true }"
      :nodes-draggable="false"
      @nodes-initialized="layoutGraph('LR')"
      @node-click="onNodeClick"
    >
      <template #node-process="props">
        <ProcessNode  :data="props.data" :attack-id="attackId" :source-position="props.sourcePosition" :target-position="props.targetPosition" />
      </template>

      <template #node-group="props">
        <div class="group-node" :style="props.style">
          <div class="group-label">{{ props.data.label }}</div>
        </div>
      </template>

      <template #edge-animation="edgeProps">
        <AnimationEdge
          :id="edgeProps.id"
          :source="edgeProps.source"
          :target="edgeProps.target"
          :source-x="edgeProps.sourceX"
          :source-y="edgeProps.sourceY"
          :targetX="edgeProps.targetX"
          :targetY="edgeProps.targetY"
          :source-position="edgeProps.sourcePosition"
          :target-position="edgeProps.targetPosition"
          :data="edgeProps.data"
        />
      </template>

      <Background />

      <Panel class="process-panel" position="top-left">
        <div class="layout-panel">
            <Button variant="secondary">
                Выйти из симуляции
            </Button>
        </div>
      </Panel>
    </VueFlow>

    <Drawer v-model:visible="showDrawer"   position="right" title="Информация о узле">
      <div v-if="selectedNode" class="node-info">
        <h3>IP адрес: {{ selectedNode.data.ip }}</h3>
        <p>Статус: {{ selectedNode.data.status || 'Не запущен' }}</p>
        <p>ID: {{ selectedNode.id }}</p>
      </div>
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import Button from '@shared/ui/button/Button.vue'
import ProcessNode from '@shared/ui/VueFlow/ProcessNode.vue'
import AnimationEdge from '@shared/ui/VueFlow/AnimationEdge.vue'
import Drawer from 'primevue/drawer';
import useDataSimulation from '@shared/ui/VueFlow/initial-elements'
import { useRunProcess } from '@shared/ui/VueFlow/useRunProcess'
import { useLayout } from '@shared/ui/VueFlow/useLayout'

const attackId = '123.418.392.30/24'

const {initialEdges, initialNodes} = useDataSimulation()

const nodes = ref(initialNodes)
const edges = ref(initialEdges)
const showDrawer = ref(false)
const selectedNode = ref(null)

const cancelOnError = ref(true)

const { graph, layout } = useLayout()

const { run, stop, reset, isRunning } = useRunProcess({ graph, cancelOnError })

const { fitView, setCenter } = useVueFlow()

async function layoutGraph(direction: any) {
  await stop()

  reset(nodes.value)

  nodes.value = layout(nodes.value, edges.value, direction)

  nextTick(() => {
    // Центрируем главный узел
    const mainNode = nodes.value.find(node => node.id === '1')
    if (mainNode) {
      setCenter(mainNode.position.x, mainNode.position.y, { duration: 0 })
    }
    fitView()
  })
}

function onNodeClick({event, node}: any) {
    if (node.id !== '1') { // Не открываем для корневого узла
        selectedNode.value = node
        showDrawer.value = true
    }
}
</script>

<style >
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.43.0/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.43.0/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.layout-flow {
  background-color: #1a192b;
  height: 100%;
  width: 100%;
}

.group-node {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.group-label {
  padding: 10px;
  color: white;
  font-size: 12px;
  border-bottom: 1px solid #4a5568;
}

.process-panel,
.layout-panel {
  display: flex;
  gap: 10px;
}

.process-panel {
  background-color: #2d3748;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.node-info {
  padding: 20px;
  color: white;
}

.node-info h3 {
  margin-bottom: 10px;
}

.node-info p {
  margin: 5px 0;
}

.checkbox-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.process-panel button:hover,
.layout-panel button:hover {
  background-color: #2563eb;
  transition: background-color 0.2s;
}

.process-panel label {
  color: white;
  font-size: 12px;
}

.stop-btn svg {
  display: none;
}

.stop-btn:hover svg {
  display: block;
}

.stop-btn:hover .spinner {
  display: none;
}

.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>