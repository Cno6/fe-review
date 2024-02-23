<template>
  <div class="app" :class="theme">
    <navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from 'widgets/Navbar';
import { useTheme } from 'shared/composables';

const { theme } = useTheme()
</script>

<style lang="scss" module>
</style>
