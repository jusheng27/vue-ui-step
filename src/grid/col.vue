<template>
  <component
    :is="tag"
    :class="['el-col', `el-col-${span}`]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { CSSProperties, inject } from 'vue';
import { computed } from '@vue/reactivity';
import { rowContextKey } from './token';

defineOptions({
  name: 'ElCol',
});

defineProps({
  span: {
    type: Number,
    default: 24,
  },
  tag: {
    type: String,
    default: 'div',
  },
});

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const style = computed(() => {
  const styles: CSSProperties = {};

  if (gutter) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
  }

  return styles;
});
</script>

<style lang="scss">
@use 'sass:math';

.el-col {
  box-sizing: border-box;
}

.el-col-0 {
  display: none;
}

@for $i from 1 through 24 {
  .el-col-#{$i} {
    max-width: math.div($i, 24) * 100%;
    flex: 0 0 math.div($i, 24) * 100%;
  }
}
</style>
