---
title: docker容器访问宿主机host服务
description: Docker版本高于v20.10 在启动docker时，可以直接请求host.docker.internal:PORT，来获取宿主机上提供的各种服务
pubDatetime: 2025-08-15T16:00:00.000Z
tags:
  - Docker
---

Docker版本高于v20.10(2020年12月4日更新）

在启动docker时，加入如下语句

```javascript
-add-host=host.docker.internal:host-gateway
```
而在container内，可以直接请求host.docker.internal:PORT，来获取宿主机上提供的各种服务

如果使用了Docker Compose，则应该将下面的句子加入container的声明中：

```javascript
extra_hosts:
- "host.docker.internal:host-gateway
```
tips：[https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms)

在启动docker时，加入如下语句

```javascript
-add-host=host.docker.internal:host-gateway
```
而在container内，可以直接请求host.docker.internal:PORT，来获取宿主机上提供的各种服务

如果使用了Docker Compose，则应该将下面的句子加入container的声明中：

```javascript
extra_hosts:
- "host.docker.internal:host-gateway
```
tips：[https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms)


