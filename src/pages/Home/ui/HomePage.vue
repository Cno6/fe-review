<template>
  <div>
    <h1>{{ $t('home-page') }}</h1>
    {{ count }} {{ doubleCount }}
    <button @click="increment()">
      Increment
    </button>
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
import { useCounterStore } from 'shared/store/counter'
import { storeToRefs } from 'pinia'

const modal = ref()

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore
</script>
