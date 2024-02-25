<template>
  <div>
    <AppButton theme="icon" @click="toggleTheme">
      <LightThemeIcon v-if="theme === Theme.LIGHT" />
      <DarkThemeIcon v-else />
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { Theme, useTheme } from 'shared/composables'
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { AppButton } from 'shared/ui'

const { theme, toggleTheme } = useTheme()
</script>
