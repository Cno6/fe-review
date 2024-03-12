<template>
  <router-link :to="$props.to" :class="[$style[theme]]">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

export interface AppLinkTheme {
  PRIMARY: 'primary'
  SECONDARY: 'secondary'
}

export interface AppLinkProps extends /* @vue-ignore */ RouterLinkProps {
  theme?: AppLinkTheme[keyof AppLinkTheme]
}

const $props = withDefaults(defineProps<AppLinkProps>(), {
  theme: 'primary',
})

const theme = $props.theme
</script>

<style lang="scss" module>
.primary {
  color: var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}
</style>
