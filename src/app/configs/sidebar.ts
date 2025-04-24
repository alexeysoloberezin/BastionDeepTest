import { Home, Zap, Shield, Database, FileText, Users, Key, Download, Search, Minimize, Keyboard } from "lucide-vue-next"
import type { SidebarItem } from '@shared/types/sidebar'

const items: SidebarItem[] = [
  {
    title: "Атака",
    description: "Запуск и управление тестовыми атаками для проверки уязвимостей",
    url: "/attack",
    icon: Zap,
  },
  {
    title: "CertVuln",
    description: "Анализ и отчет по уязвимостям сертификатов безопасности",
    url: "/certvuln",
    icon: Shield,
  },
  {
    title: "Dc",
    description: "Проверка уязвимостей центров обработки данных и сетевых ресурсов",
    url: "/dc",
    icon: Database,
  },
  {
    title: "FileVuln",
    description: "Обнаружение и анализ уязвимостей в файлах и конфигурациях",
    url: "/filevuln",
    icon: FileText,
  },
  {
    title: "GroupVuln",
    description: "Анализ групповых уязвимостей в системах безопасности",
    url: "/groupvuln",
    icon: Users,
  },
  {
    title: "Kerberos",
    description: "Проверка настроек и уязвимостей Kerberos-систем",
    url: "/kerberos",
    icon: Key,
  },
  // {
  //   title: "Load",
  //   description: "Загрузка и анализ артефактов, собранных агентами безопасности",
  //   url: "#",
  //   icon: Download,
  // },
  // {
  //   title: "ScanVuln",
  //   description: "Отчет по результатам автоматизированного сканирования на уязвимости",
  //   url: "#",
  //   icon: Search,
  // },
];

export const sidebarItems: SidebarItem[] = [
  {
    title: "Главная",
    description: "Обзор системы и сводная информация о тестировании",
    url: "/",
    icon: Home,
  },
  ...items,
  {
    title: "Свернуть",
    description: "Свернуть панель навигации",
    url: "#",
    action: 'togglePanel',
    icon: Minimize,
  },
];

export default items;
