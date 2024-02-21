<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <div :class="$style.app">
    <router-view />
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
