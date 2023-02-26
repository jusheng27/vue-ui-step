export default {
  docs: [
    {
      title: '开始',
      type: 'doc', // 普通文档
      children: [
        {
          title: '组件概览',
          name: 'overview',
          meta: {},
          path: '/vue-next/overview',
          component: () => import('@common/docs/web/overview.md'),
        },
      ],
    },
    {
      title: '全局配置',
      name: 'configs',
      children: []
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [],
    },
    {
      title: '布局',
      type: 'component',
      children: [
        {
          title: 'Grid 栅格',
          name: 'grid',
          path: '/vue-next/components/grid',
          component: () => import('tdesign-vue-next/grid/docs/grid.md'),
        },
        {
          title: 'Container 布局',
          name: 'layout',
          path: '/vue-next/components/layout',
          component: () => import('tdesign-vue-next/container/docs/container.md'),
        },
        {
          title: 'Divider 分割线',
          name: 'divider',
          path: '/vue-next/components/divider',
          component: () => import('tdesign-vue-next/divider/docs/divider.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [],
    },
    {
      title: '输入',
      type: 'component', // 组件文档
      children: [],
    },
    {
      title: '数据展示',
      type: 'component', // 组件文档
      children: [],
    },
    {
      title: '消息提醒',
      type: 'component', // 组件文档
      children: [],
    },
  ],
};
