<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { useTodo } from '~/stores/todo'
// composable
const { t } = useLang()
const todos = useTodo()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.todo.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.todo.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.todo.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div v-for="todo in todos" :key="todo.id">
        <p>{{ todo.title }}</p>
      </div>
    </PageBody>
  </PageWrapper>
</template>
