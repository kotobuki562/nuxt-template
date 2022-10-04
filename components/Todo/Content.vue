<script lang="ts" setup>
import { PropType } from 'vue'

export type IStyles = 'primary' | 'success' | 'warning' | 'danger'

export type OnClick = (id: number) => void
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
  computed: {
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
  onToggle: {
    type: Function as PropType<OnClick>,
    default: () => {},
  },
})
</script>

<template>
  <div
    :class="`bg-gray-200 dark:bg-slate-800 bg-gradient-to-r shadow-white/50 dark:shadow-slate-900/50 px-6 py-6 rounded-md shadow-lg flex space-x-6`"
  >
    <div class="flex items-center justify-center">
      <slot v-if="props.computed" name="icon">
        <IconMdi:checkCircle :class="`text-2xl `" />
      </slot>
      <slot v-else name="icon">
        <icon-bi:exclamation-circle-fill :class="`text-2xl `" />
      </slot>
    </div>
    <div class="flex-1">
      <div :class="`font-bold text-lg mb-0.5`">
        <slot name="title">{{ props.title }}</slot>
      </div>
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
