<template>
  <div :class="['el-row', `is-justify-${justify}`, `is-align-${align}`]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

defineOptions({
  name: 'ElRow',
});

defineProps({
  justify: {
    type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'>,
    default: 'start',
  },
  align: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end'>,
    default: 'flex-start',
  },
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
