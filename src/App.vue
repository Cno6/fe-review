<template>
  <div :class="$style.app">
    <h1 :class="$style.title">Counter test</h1>
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

<style lang="scss" module>
.app {
  background-color: rgb(214, 255, 255); 
}

.title {
  color: red;
  font-size: calc(15px * 3);
}
</style>
