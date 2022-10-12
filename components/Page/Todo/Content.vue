<script setup>
const props = defineProps({
  todoId: {
    type: String,
    default: '',
  },
})

// `https://jsonplaceholder.typicode.com/todos/${props.todoId}`にfetchしてtodoを取得する
const { data } = await useAsyncData(
  `https://jsonplaceholder.typicode.com/todos/${props.todoId}`,
  () =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.todoId}`).then(
      (res) => res.json()
    )
)

console.info(data.value)
</script>

<template>
  <div>
    {{ data?.title }}
  </div>
</template>
