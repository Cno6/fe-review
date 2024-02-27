<template>
  <span :class="$style.app_loader" />
</template>

<style lang="scss" module>
.app_loader {
  display: inline-block;

  box-sizing: border-box;
  width: 48px;
  height: 48px;

  border: 5px solid var(--primary-color);
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}
</style>
