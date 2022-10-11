<script setup>
const props = defineProps({
  pageTitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="props.pageTitle" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageTodoContent :todo-id="$route.params.todoId" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
