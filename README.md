# shopping_project

## Product Definition

### Product introduce

These is about a mall project.It is modeled after a project (that is in https://www.bilibili.com/video/BV1Ac411K7EQ/?spm_id_from=333.337.search-card.all.click&vd_source=e15045f909cb86d162a559c95a84ab3c).

他是用来解决人们线下购物带来不方便的问题(长途跋涉错耗费大量时间，有许多人腿脚不便)，他是基于纯前端 SPA 架构（Vue 3 + Vite），数据通过 RESTful API 获取，构建产物为纯静态文件、可托管于 Nginx/CDN平且运行于web端，本地状态持久化（购物车与登录态刷新不丢失）+ 全链路类型安全 + 完整交易闭环，而非仅商品展示的静态 Demo。

### Product Features

| 1.    | 列1   | 列2   | 列3 |
| ----- | ----- | ----- | --- |
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
