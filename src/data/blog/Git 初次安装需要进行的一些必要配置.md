---
title: Git 初次安装需要进行的一些必要配置
description: 设置你的名字和邮件地址、格式化与多余的空白字符
pubDatetime: 2025-07-19T08:58:18.000Z
draft: false
tags:
  - Git
---

### 设置你的名字和邮件地址

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### **格式化与多余的空白字符**

```bash
# pull 转 LF 为 CRLF
# push 转 CRLF 为 LF
git config --global core.autocrlf true

#push 转 CRLF 为 LF  pull 不转换
git config --global core.autocrlf input

#push pull 都不转换
git config --global core.autocrlf false
```
