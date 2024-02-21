<template>
  <div class="app" :class="theme">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <button @click="toggleTheme">Change Theme</button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'shared/composables';

const { theme, toggleTheme } = useTheme()
</script>

<style lang="scss" module>
</style>
