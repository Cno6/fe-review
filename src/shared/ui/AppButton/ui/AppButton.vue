<template>
  <button :class="[$style.app_button, $style[theme]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface AppButtonTheme {
  PRIMARY: 'primary'
  SECONDARY: 'secondary'
  ICON: 'icon'
  FILLED: 'filled'
}

interface AppButtonProps {
  theme?: AppButtonTheme[keyof AppButtonTheme]
}

const $props = withDefaults(defineProps<AppButtonProps>(), {
  theme: 'primary',
})

const theme = $props.theme
</script>

<style lang="scss" module>
.app_button {
  cursor: pointer;
  padding: 4px 8px;
  border: none;
  outline: none;
}

.primary {
  color: var(--inverted-primary-color);
  background-color: transparent;
  border: 1px solid var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}

.filled {
  color: var(--inverted-primary-color);
  background-color: var(--inverted-bg-color);
}

.icon {
  background: none;
}
</style>
