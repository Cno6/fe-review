<template>
  <header :class="$style.navbar">
    <nav :class="$style.links">
      <AppLink to="/">
        {{ $t('home') }}
      </AppLink>
      <AppLink to="/about">
        {{ $t('about') }}
      </AppLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { AppLink } from 'shared/ui'
</script>

<style lang="scss" module>
.navbar {
  width: 100%;
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
