<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex flex-col">
    <!-- <PageTodoDoc /> -->
    <PageTodoContent :todo-id="`${$route.params.todoId}`" />
  </PageWrapper>
</template>
