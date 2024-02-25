<template>
  <router-link :to="$props.to" :class="[$style[theme]]">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

const $props = defineProps<AppLinkProps>()

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends RouterLinkProps {
  theme?: AppLinkTheme
}

const theme = $props.theme ?? AppLinkTheme.PRIMARY
</script>

<style lang="scss" module>
.primary {
  color: var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}
</style>
