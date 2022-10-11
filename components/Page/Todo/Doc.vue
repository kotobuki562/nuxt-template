<template>
  <PageTodoDoc>
    <template #default="{ doc }">
      <PageHeader>
        <PageTitle :text="doc.title" />
      </PageHeader>
      <PageBody>
        <PageSection>
          <PageTodoRenderer :title="doc.title" />
        </PageSection>
      </PageBody>
    </template>
    <template #empty>
      <h1>Todo in empty</h1>
    </template>
    <template #not-found>
      <Error :code="404" wrap />
    </template>
  </PageTodoDoc>
</template>
