<template>
  <button :class="[$style.app_button, $style[theme]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface AppButtonTheme {
  PRIMARY: 'primary'
  SECONDARY: 'secondary'
  ICON: 'icon'
}

interface AppButtonProps {
  theme?: AppButtonTheme[keyof AppButtonTheme]
}

const $props = defineProps<AppButtonProps>()

const theme = $props.theme ?? 'primary'
</script>

<style lang="scss" module>
.app_button {
  cursor: pointer;
}

.primary {
  color: var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}

.icon {
  margin: 0;
  padding: 0;

  line-height: 0;

  background: none;
  border: none;
  outline: none;
}
</style>
