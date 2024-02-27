<template>
  <div class="app" :class="[$style.app, theme]">
    <Navbar :class="$style.navbar" />
    <main :class="$style.main">
      <Sidebar />
      <router-view v-slot="{ Component }" :class="$style.content">
        <Suspense>
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback>
            <div :class="$style.content">
              <AppLoader />
            </div>
          </template>
        </Suspense>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import AppLoader from 'shared/ui/AppLoader'
import { useTheme } from 'shared/composables'

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
