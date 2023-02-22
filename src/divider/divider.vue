<template>
  <div
    :class="['el-divider', isVertical && 'is-vertical']"
    :style="style"
  >
    <span
      v-if="$slots.default"
      :class="['el-divider__content', `el-divider__content-${contentPosition}`]"
    >
      <slot />
    </span>
  </div>
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
  contentPosition: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'center',
  },
});

const isVertical = computed(() => props.direction === 'vertical');

const style = computed(() => {
  const border = isVertical ? 'border-left' : 'border-bottom';

  return { [`${border}-style`]: props.borderStyle };
});
</script>

<style lang="scss">
.el-divider {
  position: relative;
  margin: 24px 0;
  border-bottom: 1px solid #dcdfe6;
  box-sizing: border-box;

  &.is-vertical {
    display: inline-block;
    vertical-align: middle;
    height: 1em;
    margin: 0 8px;
    border-bottom: none;
    border-left: 1px solid #dcdfe6;
  }

  &__content {
    position: absolute;
    top: 50%;
    padding: 0 20px;
    font-weight: bold;
    background-color: #fff;
  }

  &__content-center {
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__content-left {
    left: 20px;
    transform: translateY(-50%);
  }

  &__content-right {
    right: 20px;
    transform: translateY(-50%);
  }
}
</style>
