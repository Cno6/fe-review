<template>
  <div :class="[$style.sidebar, { [$style.collapsed]: collapsed }]">
    <AppButton :class="$style.toggle" theme="filled" @click="toggle">
      {{ collapsed ? '>' : '<' }}
    </AppButton>
    <ThemeSwitcher />
    <AppButton @click="toggleLanguage">
      {{ locale }}
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from 'features/ThemeSwitcher'
import { AppButton } from 'shared/ui'
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
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  min-width: 300px;
  padding: 20px;

  background-color: var(--inverted-bg-color);

  transition: min-width .3s ease-out;
}

.toggle {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

.collapsed {
  min-width: 0;
  transition: min-width .3s ease-in;
}
</style>
