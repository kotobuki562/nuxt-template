<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

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
    <PageBody></PageBody>
  </PageWrapper>
</template>
