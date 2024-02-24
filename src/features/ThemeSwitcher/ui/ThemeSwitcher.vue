<template>
  <div :class="$style.parent_component">
    <app-button :class="$style.theme_switcher" theme="icon" @click="toggleTheme">
      <LightThemeIcon v-if="theme === Theme.LIGHT" />
      <DarkThemeIcon v-else />
    </app-button>
  </div>
</template>

<script setup lang="ts">
import { useTheme, Theme } from 'shared/composables';
import { LightThemeIcon, DarkThemeIcon } from 'shared/assets';
import { AppButton } from 'shared/ui'

const { theme, toggleTheme } = useTheme()
</script>

<style lang="scss" module>
.parent_component {
  .theme_switcher {
    background-color: rgb(black, 0.2);
  }
}
</style>
