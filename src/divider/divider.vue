<template>
  <div
    :class="['el-divider', `el-divider--${direction}`]"
    :style="style"
  />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { computed } from '@vue/reactivity';

defineOptions({
  name: 'ElDivider',
});

const props = defineProps({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
  borderStyle: {
    type: String,
    default: 'solid',
  },
});

const style = computed(() => ({ borderStyle: props.borderStyle }));
</script>

<style lang="scss">
.el-divider {
  position: relative;

  &--horizontal {
    margin: 24px 0;
    border: 0;
    border-bottom: 1px solid #dcdfe6;
    box-sizing: border-box;
  }

  &--vertical {
    display: inline-block;
    vertical-align: middle;
    height: 1em;
    margin: 0 8px;
    border: 0;
    border-left: 1px solid #dcdfe6;
  }
}
</style>
