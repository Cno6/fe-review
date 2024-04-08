<template>
  <AppModal ref="LoginModal">
    <LoginForm />
  </AppModal>
</template>

<script setup lang="ts">
import { AppModal } from 'shared/ui'
import { ref } from 'vue'
import LoginForm from '../LoginForm/index.vue'

const LoginModal = ref<typeof AppModal>(null)

defineExpose({
  openLoginModal,
  closeLoginModal,
})

function openLoginModal() {
  LoginModal.value.openModal()
}

function closeLoginModal() {
  LoginModal.value.closeModal()
}
</script>
