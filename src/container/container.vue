<template>
  <section :class="['el-container', isVertical && 'is-vertical']">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import {
  Component, computed, PropType, useSlots,
} from 'vue';

defineOptions({
  name: 'ElContainer',
});

const props = defineProps({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: '',
  },
});

const slots = useSlots();

const isVertical = computed(() => {
  // 注意这里不能先判断 props.direction 存在后
  // 直接 return props.direction === 'vertical'
  // 需要考虑一些边界条件，如果用户赋值 direction 其他任意值呢？
  if (props.direction === 'vertical') {
    return true;
  }

  if (props.direction === 'horizontal') {
    return false;
  }

  // 注意这里需要判空
  if (slots?.default) {
    const vNodes = slots.default();

    return vNodes.some((vNode) => {
      const name = (vNode.type as Component)?.name;

      return name === 'ElHeader' || name === 'ElFooter';
    });
  }

  return false;
});
</script>

<style lang="scss">
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  min-width: 0;
  box-sizing: border-box;

  &.is-vertical {
    flex-direction: column;
  }
}
</style>
