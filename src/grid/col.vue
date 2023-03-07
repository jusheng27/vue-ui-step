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
import isNumber from 'lodash/isNumber';
import isObject from 'lodash/isObject';
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
  xs: {
    type: [Number, Object],
  },
  sm: {
    type: [Number, Object],
  },
  md: {
    type: [Number, Object],
  },
  lg: {
    type: [Number, Object],
  },
  xl: {
    type: [Number, Object],
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

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  sizes.forEach((size) => {
    if (isNumber(props[size]) && props[size] > 0) {
      classes.push(`el-col-${size}-${props[size]}`);
    } else if (isObject(size)) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        if (prop === 'span') {
          classes.push(`el-col-${size}-${sizeProp}`);
        } else if (sizeProp > 0) {
          classes.push(`el-col-${size}-${prop}-${sizeProp}`);
        }
      });
    }
  });

  return classes;
});
</script>

<style lang="scss">
@use 'sass:math';
@use '../style/mixins' as *;

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

@mixin col-size($size) {
  @include res($size) {
    .el-col-#{$size}-0 {
      display: none;
    }

    @for $i from 1 through 24 {
      .el-col-#{$size}-#{$i} {
        max-width: math.div($i, 24) * 100%;
        flex: 0 0 math.div($i, 24) * 100%;
      }

      .el-col-#{$size}-offset-#{$i} {
        margin-left: math.div($i, 24) * 100%;
      }

      .el-col-#{$size}-push-#{$i} {
        position: relative;
        left: math.div($i, 24) * 100%;
      }

      .el-col-#{$size}-pull-#{$i} {
        position: relative;
        right: math.div($i, 24) * 100%;
      }
    }
  }
}

@include col-size(xs);

@include col-size(sm);

@include col-size(md);

@include col-size(lg);

@include col-size(xl);
</style>
