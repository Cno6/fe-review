<template>
  <div :class="[$style.sidebar, { [$style.collapsed]: collapsed }]">
    <button @click="toggle">
      {{ $t('toggle') }}
    </button>
    <ThemeSwitcher />
    <button @click="toggleLanguage">
      {{ locale }}
    </button>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from 'features/ThemeSwitcher'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const collapsed = ref(false)

const { locale } = useI18n()

function toggle() {
  collapsed.value = !collapsed.value
}

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'ru' : 'en'
}
</script>

<style lang="scss" module>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-width: 300px;
  padding: 20px;

  background-color: var(--inverted-bg-color);

  transition: min-width .3s ease-out;
}

.collapsed {
  min-width: 0;
  transition: min-width .3s ease-in;
}
</style>
