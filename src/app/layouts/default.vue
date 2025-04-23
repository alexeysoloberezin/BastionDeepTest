<script setup lang="ts">
import AppSidebar from '@entities/ui/AppSidebar.vue';
import {sidebarItems} from '@app/configs/sidebar';
import { SidebarProvider } from '@shared/ui/sidebar';
</script>

<template>
     <SidebarProvider>
      <AppSidebar :items="sidebarItems">
         <slot></slot>
      </AppSidebar>
    </SidebarProvider>
</template>