<template>
    <div>
      <Drawer 
        v-model:visible="visible" 
        header="Создать симуляцию"
        position="right"
      >
        <form class="w-full space-y-4" @submit="onSubmit">
            <FormInputField name="domain" label="Домен" placeholder="example.com" />
            <FormInputField name="ip_range" label="IP-диапазон" placeholder="192.168.0.0/24" />
            <FormInputField name="user" label="Пользователь" placeholder="admin" />
            <FormInputField name="password" label="Пароль" type="password" placeholder="••••••••" />
            <Button  type="submit">Создать</Button>
        </form>
      </Drawer>
  
      <Button @click="visible = true" variant="primary">Создать симуляцию</Button>
    </div>
  </template>
  

<script lang="ts" setup>
import Drawer from 'primevue/drawer';
import Button from '@shared/ui/button/Button.vue';
import {ref} from 'vue'
import FormInputField from '@shared/ui/input/FormInputField.vue';
// import { toast } from '@shared/ui/toast/use-toast'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
// import { h } from 'vue'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  domain: z.string().min(1, "Обязательное поле"),
  ip_range: z.string().min(1, "Обязательное поле"),
  password: z.string().min(1, "Обязательное поле"),
  user: z.string().min(1, "Обязательное поле"),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
//   toast({
//     title: 'You submitted the following values:',
//     description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
//   })
})

const visible = ref(false)


</script>