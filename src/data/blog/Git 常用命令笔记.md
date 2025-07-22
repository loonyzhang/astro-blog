---
title: Git 常用命令笔记
description: |-
  设置任意分支跟踪远程分支
  通过远程分支创建一个新分支
  git checkout -b totallyNotMaster o/master
  该分支会像 master 分支一样得到隐含的 push 目的地以及 merge 的目标。 这意味着你可以在分支 totallyNotMaster 上执行 git push，将工作推送到远程仓库的 master 分支上。
pubDatetime: 2025-07-21T16:00:00.000Z
tags:
  - Git
---

### 设置任意分支跟踪远程分支

- 通过远程分支创建一个新分支
```javascript
git checkout -b totallyNotMaster o/master

```
该分支会像 master 分支一样得到隐含的 push 目的地以及 merge 的目标。 这意味着你可以在分支 totallyNotMaster 上执行 git push，将工作推送到远程仓库的 master 分支上。

- 设置本地分支追踪远程分支
```javascript
git branch -u o/master foo

```
这样 foo 就会跟踪 o/master 了。如果当前就在 foo 分支上, 还可以省略 foo

### git reset 和 checkout 区别

下面的速查表列出了命令对树的影响。 “HEAD” 一列中的 “REF” 表示该命令移动了 HEAD 指向的分支引用，而`‘HEAD’' 则表示只移动了 HEAD 自身。 特别注意 WD Safe? 一列 - 如果它标记为 NO，那么运行该命令之前请考虑一下。

- 通过远程分支创建一个新分支
```javascript
git checkout -b totallyNotMaster o/master

```
该分支会像 master 分支一样得到隐含的 push 目的地以及 merge 的目标。 这意味着你可以在分支 totallyNotMaster 上执行 git push，将工作推送到远程仓库的 master 分支上。

- 设置本地分支追踪远程分支
```javascript
git branch -u o/master foo

```
这样 foo 就会跟踪 o/master 了。如果当前就在 foo 分支上, 还可以省略 foo

### git reset 和 checkout 区别

下面的速查表列出了命令对树的影响。 “HEAD” 一列中的 “REF” 表示该命令移动了 HEAD 指向的分支引用，而`‘HEAD’' 则表示只移动了 HEAD 自身。 特别注意 WD Safe? 一列 - 如果它标记为 NO，那么运行该命令之前请考虑一下。

|  | HEAD | Index | Workdir | WD Safe? |
| --- | --- | --- | --- | --- |
| **Commit Level** |  |  |  |  |
| reset --soft [commit] | REF | NO | NO | YES |
| reset [commit] | REF | YES | NO | YES |
| reset --hard [commit] | REF | YES | YES | **NO** |
| checkout [commit] | HEAD | YES | YES | YES |
| **File Level** |  |  |  |  |
| reset (commit) [file] | NO | YES | NO | YES |
| checkout (commit) [file] | NO | YES | YES | **NO** |


