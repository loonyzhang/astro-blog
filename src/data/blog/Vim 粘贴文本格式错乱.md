---
title: Vim 粘贴文本格式错乱
description: 当从外部复制了多行文本粘贴进vim，缩进会错乱。
pubDatetime: 2025-07-21T07:04:38.000Z
tags:
  - Shell
draft: false
---

当从外部复制了多行文本粘贴进vim，缩进会错乱。

使用 `:set paste` 进入paste模式，然后在插入模式粘贴内容，缩进就正常了。

使用 `:set nopaste` 退出paste模式。

使用 `:set paste` 进入paste模式，然后在插入模式粘贴内容，缩进就正常了。

使用 `:set nopaste` 退出paste模式。


