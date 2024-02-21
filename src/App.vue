<template>
  <div class="App">
    <h1 class="App__title">Counter test</h1>
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

<style lang="scss" scoped>
.App {
  background-color: rgb(214, 255, 255);

  &__title {
    color: red;
    font-size: 15px / 3;
  }
}
</style>
