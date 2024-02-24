<template>
  <div :class="[$style.sidebar, { [$style.collapsed]: collapsed }]">
    <button @click="toggle">toggle</button>
    <theme-switcher />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from 'features/ThemeSwitcher';
import { ref } from 'vue';

const collapsed = ref(false);

function toggle() {
  collapsed.value = !collapsed.value;
}
</script>

<style lang="scss" module>
.sidebar {
  padding: 20px;
  background-color: var(--inverted-bg-color);
  min-width: 300px;
  transition: min-width .3s ease-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.collapsed {
  min-width: 0;
  transition: min-width .3s ease-in;
}
</style>
