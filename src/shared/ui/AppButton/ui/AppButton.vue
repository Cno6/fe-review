<template>
  <button :class="[$style.app_button, $style[theme]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface AppButtonTheme {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ICON: 'icon'
}

interface AppButtonProps {
  theme?: AppButtonTheme[keyof AppButtonTheme]
}

const $props = defineProps<AppButtonProps>();

const theme = $props.theme ?? 'primary';
</script>

<style lang="scss" module>
.app_button {
  cursor: pointer;
}

.icon {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
  line-height: 0;
}
</style>
