import { ref } from 'vue'
import type { Ref } from 'vue'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IUseTheme {
  readonly theme: Ref<Theme>
  toggleTheme: () => void
}

const LOCAL_STORAGE_THEME_KEY = 'theme'

const defaultTheme = getLocalStorageTheme() ?? Theme.LIGHT
const theme = ref(defaultTheme)

export function useTheme(): IUseTheme {
  const toggleTheme = () => {
    theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setLocalStorageTheme(theme.value)
  }

  return {
    theme,
    toggleTheme,
  }
}

function getLocalStorageTheme(): Theme | null {
  return window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
}

function setLocalStorageTheme(value: Theme) {
  window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value)
}
