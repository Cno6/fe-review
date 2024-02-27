<template>
  <div class="app" :class="[$style.app, theme]">
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
import Navbar from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import AppLoader from 'shared/ui/AppLoader'
import { useTheme } from 'shared/composables'
import ErrorBoundary from './providers/ErrorBoundary'

const { theme } = useTheme()
</script>

<style lang="scss" module>
.app {
  display: flex;
  flex-direction: column;
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
