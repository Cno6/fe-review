<template>
  <div v-if="hasError">
    <h2>{{ $t('error-boundary') }}</h2>
    <p>{{ errorMessage }}</p>
    <AppButton theme="primary" @click="reloadPage">
      {{ $t('reload-page') }}
    </AppButton>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { AppButton } from 'shared/ui'
import { onErrorCaptured, ref } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')

onErrorCaptured((error, instance, info) => {
  errorMessage.value = `${error} in ${instance.$.type.__file} at ${info}`
  hasError.value = true

  return false
})

function reloadPage() {
  window.location.reload()
}
</script>
