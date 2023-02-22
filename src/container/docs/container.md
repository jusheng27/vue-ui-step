---
title: Container 布局
description: 用于组织网页的框架结构。
isComponent: true
usage: { title: '', description: '' }
spline: layout
---
### 基础配置
{{ basic }}

### ElHeader、ElFooter 自定义 height
{{ basic-2 }}

### ElAside 自定义 width
{{ basic-3 }}

### 常见布局
{{ basic-4 }}

## API
### Button Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
content | String / Slot / Function | - | 按钮内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
default | String / Slot / Function | - | 按钮内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
disabled | Boolean | false | 禁用状态 | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N