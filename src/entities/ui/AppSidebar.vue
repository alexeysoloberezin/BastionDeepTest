<script setup lang="ts">
import type { SidebarItem } from "@shared/types/sidebar";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarRail,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@shared/ui/sidebar"
import { useSidebar } from "@shared/ui/sidebar/utils"
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";

const { items } = defineProps<{
    items: Array<SidebarItem>;
}>();

const { toggleSidebar } = useSidebar()
const route = useRoute()
const router = useRouter()

const handleClickLink = (item: SidebarItem) => {
    if (item?.action) {
        switch (item?.action) {
            case 'togglePanel':
                toggleSidebar()
                break;
            default:
                break;
        }
    }else{
        router.push(item.url)
    }
}

const isActive = (url: string) => {
    return url === route?.path
}

const handleKeyDown = (event: KeyboardEvent) => {
    const currentIndex = items.findIndex(item => item.url === route.path);
    
    if (event.key === 'ArrowDown') {
        if (currentIndex < items.length - 1) {
            const nextItem = items[currentIndex + 1];
            if (!nextItem.action) {
                router.push(nextItem.url);
            }
        }
    }
    
    if (event.key === 'ArrowUp') {
        if (currentIndex > 0) {
            const prevItem = items[currentIndex - 1];
            if (!prevItem.action) {
                router.push(prevItem.url);
            }
        }
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
});


</script>

<template>
    <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    <img src="/logo.svg" alt="logo" class="max-h-[40px] object-contain max-w-[170px]">
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in items" :key="item.title" >
                            <SidebarMenuButton asChild :variant="isActive(item.url) ? 'filled' : 'default'">
                                <button @click="handleClickLink(item)">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
    </Sidebar>
    <main class="main p-3">
        <slot />
    </main>
</template>