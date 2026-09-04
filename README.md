# shopping_project

## Product Definition

### Product Introduce

These is about a mall project.It is modeled after a project (that is in https://www.bilibili.com/video/BV1Ac411K7EQ/?spm_id_from=333.337.search-card.all.click&vd_source=e15045f909cb86d162a559c95a84ab3c).

他是用来解决人们线下购物带来不方便的问题(长途跋涉错耗费大量时间，有许多人腿脚不便)，他是基于纯前端 SPA 架构（Vue 3 + Vite），数据通过 RESTful API 获取，构建产物为纯静态文件、可托管于 Nginx/CDN平且运行于web端，本地状态持久化（购物车与登录态刷新不丢失）+ 全链路类型安全 + 完整交易闭环，而非仅商品展示的静态 Demo。

### Product Features

| 优先级 | 功能模块         | 功能说明                                               |
| ------ | ---------------- | ------------------------------------------------------ |
| P0     | 登录功能         | 用户可以进行登录才能用更多功能，否则只能以游客身份浏览 |
| P0     | 退出登录功能     | 用户可以进行退出登录变成游客身份                       |
| P0     | 支付功能(支付宝) | 可以通过设定的支付账号进行支付                         |
| P0     | 购物车功能       | 用户可以让商品放入购物车统一购买                       |
| P1     | 查看功能         | 用户可以点击商品链接进入商品详细页                     |
| P1     | 商品分类功能     | 用户可以点击各个模块查看各个分类的商品                 |
| P1     | 订单功能         | 用户可以查看已购买商品的功能                           |
| P1     | 用户信息功能     | 用户可以查看自己的用户信息                             |
| P2     | 切换地址功能     | 用户可以切换订单地址                                   |
| P2     | 放大镜功能       | 用户可以对商品图片进行放大的功能                       |

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
