# FE-REVIEW-VUE

Проект основан на программе курса: https://ulbitv.ru/frontend.

Основной целью проекта является получение обширных представлений о различных инструментах, технологиях и подходах, используемых в разработки веб-приложений.

Разработка придерживалась программы курса в качестве направления исследуемых тем. Однако по некоторым моментам отличается от оригинальной, в связи со спецификой стека текущего проекта и моим желанием.

## Технический стек

На текущий момент стек используемых технологий и подходов следующий. В процессе некоторые библиотеки могут меняться, для расширения опыта и кругозора.

- **Язык**:
  - Typescript
- **Фреймворк и экосистема**:
  - Vue 3
  - Vue Router
  - Vue i18n
  - Pinia
- **CSS**:
  - CSS Modules
  - Sass (Scss)
- **Сборка**:
  - Webpack 5 - конфигурация с нуля.
- **Линтинг**:
  - Eslint + @antfu/eslint-config
  - Stylelint
  - lint-staged + simple-git-hooks
- **Тестирование**:
  - Unit: Jest (TS Jest, Vue Jest) + Vue Test Utils
  - UI: Loki + Storybook
- **Архитектура**:
  - Feature-Sliced Design
- **Backend**:
  - json-server
- **CI/CD**:
  - Github Actions (CI)

## TODO:
1. Локализация:
    1. Попробовать [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n/tree/main/packages/adapter-vue) вместо `vue i18n`.
    2. Lazy loading файлов локализации разбитых на чанки по языку и модулям.
    3. eslint-plugin-vue-i18n
2. Текстирование
    1. Разобраться как правильно мокать переводы
3. Typescript
    1. Детальнее изучить правильную работу Vue 3 с Typescript
    2. Вернуть `"noImplicitAny": true` в `tsconfig` и разобраться с проблемой типа any в динамическом компоненте в `App.vue`
