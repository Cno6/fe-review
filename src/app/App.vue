<template>
  <div class="app" :class="[$style.app, theme]">
    <Navbar :class="$style.navbar" />
    <main :class="$style.main">
      <Sidebar />
      <router-view :class="$style.content" />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import { useTheme } from 'shared/composables'

const { theme } = useTheme()
</script>

<style lang="scss" module>
.app {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
