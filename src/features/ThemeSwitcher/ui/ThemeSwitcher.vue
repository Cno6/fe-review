<template>
  <app-button :class="$style.theme_switcher" theme="icon" @click="toggleTheme">
    <LightThemeIcon v-if="theme === Theme.LIGHT" />
    <DarkThemeIcon v-else />
  </app-button>
</template>

<script setup lang="ts">
import { useTheme, Theme } from 'shared/composables';
import { LightThemeIcon, DarkThemeIcon } from 'shared/assets';
import { AppButton } from 'shared/ui'

const { theme, toggleTheme } = useTheme()
</script>

<style lang="scss" module>
// TODO: проблема переопределения стилей из родительского компонента.
.theme_switcher {
  background-color: red;
}
</style>
