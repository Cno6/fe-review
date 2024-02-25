# FE-REVIEW-VUE

Проект основан на программе курса: https://ulbitv.ru/frontend.

Основной целью проекта является получение обширных представлений о различных инструментах, технологиях и подходах, используемых в разработки веб-приложений. 

Разработка придерживалась программы курса в качестве направления исследуемых тем. Однако по некоторым моментам отличается от оригинальной, в связи со спецификой стека текущего проекта и моим желанием.

## Технический стек

На текущий момент стек используемых технологий и подходов следующий. В процессе некоторые библиотеки могут меняться, для расширения опыта и кругозора.

- Язык:
  - Typescript
- Фреймворк и экосистема:
  - Vue 3
  - Vue Router
  - Vue i18n
- CSS:
  - CSS Modules
  - Sass (Scss)
- Сборка:
  - Webpack 5 - конфигурация с нуля.
- Линтинг:
  - Eslint + @antfu/eslint-config
  - lint-staged + simple-git-hooks
- Архитектура:
  - Feature-Sliced Design
  
## TODO:
1. Попробовать [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n/tree/main/packages/adapter-vue) вместо `vue i18n`.
2. Lazy loading файлов локализации разбитых на чанки по языку и модулям.
