---
title: tailwindcss v4 升级后的坑
description: 用vite的方式升级了tailwindcss v4，因为主UI框架用的element-plus，结果出现了element-plus组件自身的css比tailwindcss的优先级高的情况
pubDatetime: 2025-12-02T16:00:00.000Z
tags:
  - Frontend
---

用vite的方式升级了tailwindcss v4，因为主UI框架用的element-plus，结果出现了element-plus组件自身的css比tailwindcss的优先级高的情况。

原来 tailwindcss v4 的类都按layer分层了，而这个layer的特性就是比平常的css优先级要低。

```javascript
/*原本写法：其中包括了@layer优先级配置，和几大css的导入*/
/*@import "tailwindcss";*/

/*修改后写法*/
@import "tailwindcss/theme.css" layer(theme);
/* 不引入preflight，对应以前的preflight=false */
/*@import "tailwindcss/preflight.css" layer(base);*/
@import "tailwindcss/utilities.css" /* 去掉 layer */;
```



