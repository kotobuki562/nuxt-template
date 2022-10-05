<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { Todo, useNewTodo, useTodo } from '~/stores/todo'

// composable
const { t } = useLang()
const todoState = useTodo()
const newTodo = useNewTodo()
const onCreateTodo = () => {
  todoState.add({
    id: todoState.todos.length + 1,
    title: newTodo.title,
    content: newTodo.content,
    completed: false,
    createdAt: new Date(),
  })
  newTodo.reset()
}

const onRemoveTodo = (id: number) => {
  todoState.remove(id)
}

const onUpdateTodo = (todo: Todo) => {
  todoState.update(todo)
}
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
      <FormTextInput
        v-model="newTodo.title"
        placeholder="Title"
        size="md"
        class="w-full md:w-1/3"
      />
      <FormTextInput
        v-model="newTodo.content"
        placeholder="Content"
        size="md"
        class="w-full md:w-1/3"
      />
      <Button
        class="capitalize w-full md:w-auto"
        text="Add Todo"
        type="primary"
        size="md"
        @click.prevent="onCreateTodo"
      />

      <div v-if="todoState.todos.length > 0">
        <div v-for="todo in todoState.todos" :key="todo.id">
          <TodoContent
            :id="todo.id"
            :title="todo.title"
            :content="todo.content"
            :created-at="new Date(todo.createdAt)"
            :completed="todo.completed"
            @remove="onRemoveTodo"
            @update="onUpdateTodo"
          />
        </div>
      </div>
    </PageBody>
  </PageWrapper>
</template>
