<template>
  <div>
    <h1>{{ $t('home-page') }}</h1>

    <AppModal ref="modal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, alias saepe debitis commodi nostrum quo sint minima error? Sapiente quasi sunt at velit eius consequatur dolorum voluptas ducimus voluptates ipsum!
    </AppModal>
    <button @click="modal.openModal">
      Open
    </button>
  </div>
</template>

<script lang="ts" setup>
import { AppModal } from 'shared/ui'
import { ref } from 'vue'

const modal = ref()
</script>
