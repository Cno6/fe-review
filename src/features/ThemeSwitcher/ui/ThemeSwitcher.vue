<template>
  <div>
    <app-button theme="icon" @click="toggleTheme">
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
</style>
