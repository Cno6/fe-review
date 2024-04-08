<template>
  <div :class="$style.app_input">
    <span>{{ props.placeholder }} ></span>
    <div :class="$style.input_wrapper">
      <input
        v-bind="$attrs"
        ref="inputRef"
        :value="props.modelValue"
        :class="$style.input"
        @mouseup="handleMouseUp"
        @input="handleInput"
        @keyup="handleKeyDown"
        @focus="isFocus = true"
        @blur="isFocus = false"
      >
      <span v-show="isFocus" :class="$style.caret" :style="{ width: `min(${caretPosition}ch, 100%)` }">_</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const caretPosition = ref(0)
const isFocus = ref(false)
const inputRef = ref(null)

// Функция для установки позиции каретки
function setCaretPosition(position) {
  nextTick(() => {
    if (inputRef.value)
      inputRef.value.setSelectionRange(position, position)
  })
}

function updateCaretPosition(value) {
  caretPosition.value = value
  setCaretPosition(value)
}

function handleInput(event) {
  emit('update:modelValue', event.target.value)
  updateCaretPosition(event.target.selectionStart)
}

function handleMouseUp(event) {
  updateCaretPosition(event.target.selectionStart)
}

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    nextTick(() => {
      updateCaretPosition(event.target.selectionStart)
    })
  }
  else if (event.key === 'Home' || event.key === 'End') {
    let newPosition = 0
    if (event.key === 'End')
      newPosition = event.target.value.length

    updateCaretPosition(newPosition)
    event.preventDefault()
  }
}

onMounted(() => {
  setCaretPosition(caretPosition.value)
})
</script>

<style module lang="scss">
.app_input {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;

  color: currentcolor;
}

.input_wrapper {
  position: relative;
  margin-right: 1ch;
}

.input {
  width: 20ch;

  color: currentcolor;

  background-color: transparent;
  border: none;
  outline: none;
  caret-color: transparent;
}

.caret {
  position: absolute;
  top: 4px;
  left: 1ch;

  display: flex;
  justify-content: flex-end;

  max-width: 100%;

  animation: blink steps(2) 0.7s infinite alternate;

  @keyframes blink {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
