<script setup lang='ts'>
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './index'
import { Button } from '@shared/ui/button'

const props = withDefaults(
  defineProps<{
    title: string;
    icon: any;
    buttonText?: string;
    description: string;
  }>(),
  {
    buttonText: "Перейти", 
  }
);

const emits = defineEmits(['click:button'])
</script>

<template>
    <div class="group relative">
      <Card class="group-hover:scale-[0.97] h-full transform-origin-[center_bottom]">
          <CardHeader>
              <div class="flex items-center gap-2">
                  <component :is="icon" />
                  <CardTitle>{{ title }}</CardTitle>
              </div>
              <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <CardFooter class="flex justify-between px-6 pb-6">
              <Button @click="$emit('click:button')" variant="default">{{  buttonText  }}</Button>
          </CardFooter>
      </Card>
      <div class="w-[100%] scale-x-[.8] opacity-0 group-hover:opacity-[100%] h-[50%] group-hover:bg-white transition-all duration-[.5s] border absolute group-hover:top-[-3px] top-[5px] rounded-lg left-1/2 translate-x-[-50%] z-[-1]"></div>
    </div>
</template>