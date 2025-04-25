import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'

const layouts: Record<string, () => Promise<typeof import('*.vue')>> = {
  default: () => import('@app/layouts/default.vue'),
};

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@pages/Home.vue') },
  { path: '/attack', component: () => import('@pages/Attack.vue') },
  { path: '/dc', component: () => import('@pages/DC.vue') },
  { path: '/groupvuln', component: () => import('@pages/GroupVuln.vue') },
  { path: '/certvuln', component: () => import('@pages/CertVuln.vue') },
  { path: '/filevuln', component: () => import('@pages/FileVuln.vue') },
  { path: '/kerberos', component: () => import('@pages/Kerberos.vue') },
  { path: '/hotkeys', component: () => import('@pages/Hotkeys.vue') },
  { path: '/simulation/:id', component: () => import('@pages/Simulation.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
