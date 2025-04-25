<script setup lang="ts">
import { Button } from '@shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover'
import RangeDatePicker from '@shared/ui/range-calendar/RangeDatePicker.vue'
import { FilterIcon } from 'lucide-vue-next'
import { Text } from '@shared/ui/typography'
import { Input } from '@shared/ui/input'

</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline">
                <FilterIcon />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto">
            <div class="flex flex-col gap-2">
                <div>
                    <Text as="h5" variant="muted" class="block mb-1">Даты</Text>
                    <RangeDatePicker />
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>

