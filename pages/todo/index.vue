<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import { useNewTodo, useTodo } from '~/stores/todo'

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
  })
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
      <form @submit.prevent="onCreateTodo" data-testid="add-items">
        <input type="text" v-model="newTodo.title" />
        <input type="text" v-model="newTodo.content" />
        <button type="submit">Add</button>
      </form>

      <div v-if="todoState.todos.length > 0">
        <div v-for="todo in todoState.todos" :key="todo.id">
          <p>{{ todo.id }}</p>
          <p>{{ todo.title }}</p>
          <p>{{ todo.content }}</p>
          <!-- todo.completedがtrueなら"完了"、falseなら未完了 -->
          <p>{{ todo.completed ? '完了' : '未完了' }}</p>
        </div>
      </div>
    </PageBody>
  </PageWrapper>
</template>
