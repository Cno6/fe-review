<template>
  <div class="app" :class="theme">
    <navbar />
    <router-view />
    <button @click="toggleTheme">Change Theme</button>
  </div>
</template>

<script setup lang="ts">
import Navbar from 'widgets/Navbar';
import { useTheme } from 'shared/composables';

const { theme, toggleTheme } = useTheme()
</script>

<style lang="scss" module>
</style>
