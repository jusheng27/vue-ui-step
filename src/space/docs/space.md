---
title: Space 间距
description: 控制组件之间的间距。
isComponent: true
usage: { title: '', description: '' }
spline: layout
---

## 基础用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

{{ basic }}

## 垂直布局

使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

{{ direction }}

## 控制间距的大小

通过调整 size 的值来控制间距的大小

{{ size }}

## 自定义 size

很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。

{{ customSize }}

## 自动换行

在 水平 (horizontal) 模式下, 通过控制 wrap（布尔类型）来控制是否自动换行

{{ wrap }}

## 对齐方式

设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致。

{{ alignment }}

## 字母数字类型分隔符

{{ spacer }}

## 分隔符还可以是 VNode 类型

{{ spacerVNode }}

## 填充容器

{{ fill }}

{{ fillRatio }}