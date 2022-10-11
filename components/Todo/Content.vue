<script lang="ts" setup>
import { PropType } from 'vue'
import { Todo } from '~~/stores/todo'

export type IStyles = 'primary' | 'success' | 'warning' | 'danger'

export type OnClick = (id: number) => void
export type OnUpdate = (todo: Todo) => void
// props
const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  onRemove: {
    type: Function as PropType<OnClick>,
    default: () => {},
  },
  onUpdate: {
    type: Function as PropType<OnUpdate>,
    default: () => {},
  },
})

const todoStyles = reactive<{
  [key: string]: string
}>({
  isCompleted: 'bg-gray-200 dark:bg-slate-800',
  unCompleted: 'bg-white dark:bg-slate-900',
})

const selectedLabelStyle = computed(() => {
  return props.completed ? todoStyles.isCompleted : todoStyles.unCompleted
})

const isEdit = ref(false)

const onToggleEdit = () => {
  isEdit.value = !isEdit.value
}

const title = ref(props.title)
const content = ref(props.content)
const completed = ref(props.completed)

const onToggleCompleted = () => {
  completed.value = !completed.value
}

const onUpdateTodo = () => {
  props.onUpdate({
    id: props.id,
    title: title.value,
    content: content.value,
    completed: completed.value,
    createdAt: props.createdAt,
  })
  onToggleEdit()
}

onMounted(() => {
  title.value = props.title
  content.value = props.content
  completed.value = props.completed
})
</script>

<template>
  <div
    :class="`bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${selectedLabelStyle}`"
  >
    <div class="flex items-center justify-center">
      <slot v-if="props.completed" name="icon">
        <IconMdi:checkCircle :class="`text-2xl text-green-500`" />
      </slot>
      <slot v-else name="icon">
        <icon-bi:exclamation-circle-fill :class="`text-2xl `" />
      </slot>
    </div>
    <SwitchItem size="sm" :checked="isEdit" @toggle="onToggleEdit" />
    <div v-if="isEdit" class="grid gap-3 w-full">
      <FormTextInput
        v-model="title"
        placeholder="Title"
        size="md"
        class="w-full"
      />
      <FormTextInput
        v-model="content"
        placeholder="Content"
        size="md"
        class="w-full"
      />
      <div class="w-fit">
        <SwitchItem
          label="完了する"
          size="sm"
          :checked="completed"
          @toggle="onToggleCompleted"
        />
      </div>
      <div class="w-[200px]">
        <Button
          class="capitalize w-full md:w-auto"
          text="Update Todo"
          type="primary"
          size="md"
          @click="onUpdateTodo"
        />
      </div>
    </div>
    <div v-else class="flex-1">
      <NuxtLink
        tag="a"
        :to="`/todo/${props.id}`"
        class="font-bold text-lg mb-0.5"
      >
        <slot name="title">{{ props.title }}</slot>
      </NuxtLink>

      <div class="text-gray-700 dark:text-gray-100">
        <slot name="title">{{ props.content }}</slot>
      </div>
      <div class="text-gray-700 text-sm">
        {{ props.createdAt.toISOString() }}
      </div>
    </div>
    <div>
      <button
        class="text-slate-600 hover:text-red-500 dark:text-gray-400 font-bold"
        @click="props.onRemove(props.id)"
      >
        <icon-clarity:times-line />
      </button>
    </div>
  </div>
</template>
