<template>
  <component
    :is="tag"
    :class="['el-col', ...classes]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { CSSProperties, inject } from 'vue';
import { computed } from '@vue/reactivity';
import { rowContextKey } from './constrants';

defineOptions({
  name: 'ElCol',
});

const props = defineProps({
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
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

const classes = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const classes: string[] = [];
  const attrs = ['span', 'offset', 'push', 'pull'];

  attrs.forEach((attr) => {
    const size = props[attr];

    if (attr === 'span') {
      classes.push(`el-col-${size}`);
    } else if (size > 0) {
      classes.push(`el-col-${attr}-${size}`);
    }
  });

  return classes;
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

  .el-col-offset-#{$i} {
    margin-left: math.div($i, 24) * 100%;
  }

  .el-col-push-#{$i} {
    position: relative;
    left: math.div($i, 24) * 100%;
  }

  .el-col-pull-#{$i} {
    position: relative;
    right: math.div($i, 24) * 100%;
  }
}
</style>
