import { Ref, ref } from "vue"

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface useTheme {
  theme: Ref<Theme>
  toggleTheme: () => void
}

const defaultTheme = getLocalStorageTheme() ?? Theme.LIGHT

export function useTheme(): useTheme {
  const theme = ref(defaultTheme)

  const toggleTheme = () => {
    theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setLocalStorageTheme(theme.value)
  }

  return {
    theme,
    toggleTheme
  }
}

const LOCAL_STORAGE_THEME_KEY = 'theme'

function getLocalStorageTheme(): Theme | null {
  return window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
}

function setLocalStorageTheme(value: Theme) {
  window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value)
}
