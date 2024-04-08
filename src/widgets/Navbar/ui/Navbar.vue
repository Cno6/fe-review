<template>
  <header :class="$style.navbar">
    <LoginModal ref="loginModal">
      Попап входа
    </LoginModal>
    <nav :class="$style.links">
      <AppLink to="/">
        {{ $t('home') }}
      </AppLink>
      <AppLink to="/about">
        {{ $t('about') }}
      </AppLink>
    </nav>
    <AppButton theme="primary" @click="openModal">
      {{ $t('sign-in') }}
    </AppButton>
  </header>
</template>

<script setup lang="ts">
import { AppButton, AppLink } from 'shared/ui'
import { LoginModal } from 'features/AuthByUsername'
import { ref } from 'vue'

const loginModal = ref<typeof LoginModal>()

function openModal() {
  loginModal.value.openLoginModal()
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
