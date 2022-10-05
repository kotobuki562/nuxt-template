<script lang="ts" setup>
import { PropType } from 'vue'

type Size = 'lg' | 'md' | 'sm'
type OnToggle = (e: Event) => void
const props = defineProps({
  size: {
    type: String as PropType<Size>,
    default: 'sm',
  },
  label: {
    type: String,
    default: undefined,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  onToggle: {
    type: Function as PropType<OnToggle>,
    default: () => {},
  },
})

const labelStyles = reactive<{
  [key: string]: string
}>({
  isCheck: 'text-green-500',
  unCheck: 'text-gray-700 dark:text-gray-300',
})

const parentSizes = reactive<{
  [key: string]: string
}>({
  lg: 'w-20 h-10',
  md: 'w-16 h-8',
  sm: 'w-12 h-6',
})
const parentStyles = reactive<{
  [key: string]: string
}>({
  isCheck: 'bg-green-500',
  unCheck: 'bg-gray-300',
})
const childSizes = reactive<{
  [key: string]: string
}>({
  lg: 'w-8 h-8',
  md: 'w-6 h-6',
  sm: 'w-4 h-4',
})
const translates = reactive<{
  [key: string]: string
}>({
  none: 'translate-x-0',
  lg: 'translate-x-10',
  md: 'translate-x-8',
  sm: 'translate-x-6',
})

const selectedLabelStyle = computed(() => {
  return props.checked ? labelStyles.isCheck : labelStyles.unCheck
})
const selectedParentSize = computed(
  () => parentSizes[props.size] || parentSizes.lg
)
const selectedParentStyle = computed(() =>
  props.checked ? parentStyles.isCheck : parentStyles.unCheck
)

const selectedChildSize = computed(
  () => childSizes[props.size] || childSizes.lg
)

const selectedTranslate = computed(() =>
  props.checked ? translates[props.size] : translates.none
)
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <span v-if="props.label" :class="`mr-3 ${selectedLabelStyle}`">{{
      props.label
    }}</span>
    <input
      type="checkbox"
      :checked="props.checked"
      class="hidden"
      @change="props.onToggle"
    />
    <div
      :class="`flex items-center rounded-full px-1 ${selectedParentSize} ${selectedParentStyle}`"
    >
      <div
        :class="`bg-white rounded-full transition-transform transform ${selectedChildSize} ${selectedTranslate}`"
      ></div>
    </div>
  </label>
</template>
