<template>
  <form :class="$style.login_form">
    <AppInput v-model="username" type="text" placeholder="Username" />
    <AppInput v-model="password" type="password" placeholder="Password" />
    <AppButton>{{ $t('sign-in') }}</AppButton>
  </form>
</template>

<script setup lang="ts">
import { AppButton, AppInput } from 'shared/ui'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<style module lang="scss">
.login_form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
