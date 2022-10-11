<script setup>
const props = defineProps({
  todoId: {
    type: String,
    default: '',
  },
})

onMounted(async () => {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${props.todoId}`
  ).then((res) => {
    return res.json()
  })
  console.info(todo)
})
</script>

<template>
  <div>
    {{ todo.title }}
  </div>
</template>
