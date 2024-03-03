<template>
  <header :class="$style.navbar">
    <Teleport to="body">
      <AppModal ref="authModal">
        Попап входа
      </AppModal>
    </Teleport>
    <nav :class="$style.links">
      <AppLink to="/">
        {{ $t('home') }}
      </AppLink>
      <AppLink to="/about">
        {{ $t('about') }}
      </AppLink>
    </nav>
    <AppButton theme="primary" @click="openModal">
      Войти
    </AppButton>
  </header>
</template>

<script setup lang="ts">
import { AppButton, AppLink, AppModal } from 'shared/ui'
import { ref } from 'vue'

const authModal = ref<typeof AppModal>()

function openModal() {
  authModal.value.openModal()
}
</script>

<style lang="scss" module>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;

  background-color: var(--inverted-bg-color);
}

.links {
  display: flex;
  gap: 15px;
}
</style>
