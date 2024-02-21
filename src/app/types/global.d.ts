/* 
  Позволяет TypeScript распознавать
  и проверять содержимое `.vue` файлов.
 */
/**
 * Vue компонент
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
