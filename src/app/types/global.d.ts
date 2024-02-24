/*
  Позволяет TypeScript распознавать
  и проверять содержимое `.vue` файлов.
 */
/**
 * Vue компонент
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

/**
 * Vue компонент SVG-иконки
 */
declare module '*.svg' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare const __IS_DEV__: boolean
