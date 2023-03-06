---
title: Grid 栅格
description: 栅格是以规则的网格阵列来指导和规范网页中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。
isComponent: true
usage: { title: '', description: '' }
spline: layout
---

## 基础布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

{{ basic }}

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

{{ span }}

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

{{ justify }}

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

{{ gutter }}

## 列偏移

您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

{{ offset }}

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

{{ responsive }}