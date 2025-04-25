<!-- shared/ui/form/FormInputField.vue -->
<template>
    <FormField :name="name" v-slot="{ componentField }" :validate-on-blur="!validateOnBlur">
      <FormItem v-auto-animate>
        <FormLabel>{{ label }}</FormLabel>
        <FormControl>
          <Input :type="type" :placeholder="placeholder" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </template>
  
  <script lang="ts" setup>
  import { Input } from '../input'
  import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '../form'
  
  defineProps<{
    name: string
    label: string
    placeholder?: string
    type?: string
    validateOnBlur?: boolean
  }>()
  </script>
  