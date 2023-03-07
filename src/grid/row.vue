<template>
  <component
    :is="tag"
    :class="['el-row', `is-justify-${justify}`, `is-align-${align}`]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import {
  computed, CSSProperties, PropType, provide,
} from 'vue';
import { rowContextKey } from './constrants';

defineOptions({
  name: 'ElRow',
});

const props = defineProps({
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'>,
    default: 'start',
  },
  align: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end'>,
    default: 'flex-start',
  },
  tag: {
    type: String,
    default: 'div',
  },
});

provide(rowContextKey, {
  gutter: computed(() => props.gutter),
});

const style = computed(() => {
  const styles: CSSProperties = {};

  if (props.gutter) {
    styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`;
  }

  return styles;
});
</script>

<style lang="scss">
.el-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  &.is-justify-start {
    justify-content: start;
  }

  &.is-justify-center {
    justify-content: center;
  }

  &.is-justify-end {
    justify-content: end;
  }

  &.is-justify-space-between {
    justify-content: space-between;
  }

  &.is-justify-space-around {
    justify-content: space-around;
  }

  &.is-justify-space-evenly {
    justify-content: space-evenly;
  }

  &.is-align-flex-start {
    align-items: flex-start;
  }

  &.is-align-center {
    align-items: center;
  }

  &.is-align-flex-end {
    align-items: flex-end;
  }
}
</style>
