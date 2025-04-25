<template>
    <div class="card flex justify-center">
        <Drawer 
            v-model:visible="visible" 
            header="Создать симуляцию"
            position="right"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button @click="visible = true" >Создать симуляцию</Button>
    </div>
</template>

<script lang="ts" setup>
import Drawer from 'primevue/drawer';
import Button from '@shared/ui/button/Button.vue';
import {ref} from 'vue'

const visible = ref(false)
</script>