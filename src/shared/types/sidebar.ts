import type { FunctionalComponent } from "vue"

export interface SidebarItem {
    title: string
    description: string
    url: string,
    icon: FunctionalComponent,
    action?: string,
}