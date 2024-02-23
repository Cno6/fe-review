<template>
  <router-link :to="$props.to" :class="[$style.app_link, $style[theme]]">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { RouterLinkProps } from 'vue-router';

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends RouterLinkProps {
  theme?: AppLinkTheme;
}

const $props = defineProps<AppLinkProps>();

const theme = $props.theme ?? AppLinkTheme.PRIMARY;
</script>

<style lang="scss" module>
.app_link {}

.primary {
  color: var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}
</style>
