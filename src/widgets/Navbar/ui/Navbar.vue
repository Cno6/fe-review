<template>
  <div :class="$style.navbar">
    <div :class="$style.links">
      <app-link to="/">Home</app-link>
      <app-link to="/about">About</app-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLink from 'shared/ui'
</script>

<style lang="scss" module>
.navbar {
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  padding: 20px;
}

.links {
  display: flex;
  gap: 15px;
  margin-left: auto;
}
</style>
