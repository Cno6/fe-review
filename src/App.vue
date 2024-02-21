<template>
  <div>
    <h1>Counter test</h1>
    <span>{{ counter }}</span>
    <br>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0)

function increment() {
  counter.value++
}
</script>

<style scoped>

</style>
