<template>
  <div :class="[$style.app]">
    <Navbar :class="$style.navbar" />
    <main :class="$style.main">
      <Sidebar />
      <router-view v-slot="{ Component }">
        <div :class="$style.content">
          <ErrorBoundary>
            <Suspense>
              <template #default>
                <component :is="Component" />
              </template>
              <template #fallback>
                <AppLoader />
              </template>
            </Suspense>
          </ErrorBoundary>
        </div>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import Navbar from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import { AppLoader } from 'shared/ui'
import { useTheme } from 'shared/composables'
import ErrorBoundary from './providers/ErrorBoundary'
import './styles/index.scss'

const { theme } = useTheme()

watch(theme, (value, oldValue) => {
  document.body.classList.remove(oldValue)
  document.body.classList.add(value)
}, { immediate: true })
</script>

<style lang="scss" module>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
