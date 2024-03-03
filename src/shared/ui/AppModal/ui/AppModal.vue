<template>
  <div :class="[$style.app_modal, { [$style.opened]: isOpen }]">
    <div :class="$style.overlay" @click.self="persistCloseHandler">
      <div :class="$style.content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{ persist?: boolean, isOpen?: boolean }>(), {
  persist: false,
  isOpen: false,
})
defineExpose({ openModal, closeModal })

const isOpen = ref(props.isOpen)

function persistCloseHandler(event: Event) {
  if (props.persist)
    return

  if (event instanceof KeyboardEvent && event.key !== 'Escape')
    return

  closeModal()
}

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

watch(isOpen, (value) => {
  if (value)
    document.addEventListener('keydown', persistCloseHandler)
  else
    document.removeEventListener('keydown', persistCloseHandler)
})
</script>

<style lang="scss" module>
.app_modal {
  pointer-events: none;

  position: fixed;
  z-index: var(--z-index-modal);
  inset: 0;

  opacity: 0;

  transition: opacity 0.3s;
}

.opened {
  pointer-events: all;
  opacity: 1;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: var(--overlay-color);
}

.content {
  max-width: 30%;
  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 12px;
}
</style>
