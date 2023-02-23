<template>
  <div
    :class="['el-divider', `el-divider--${direction}`]"
    :style="style"
  >
    <!-- 注意：通过 $slots.default 判断有文案内容，才添加节点 -->
    <div
      v-if="$slots.default"
      :class="['el-divider__text', `el-divider__text--${contentPosition}`]"
    >
      <slot />
    </div>
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
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center',
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

  &__text {
    position: absolute;
    top: 0;
    padding: 0 20px;
    font-weight: 500;
    background-color: #fff;

    &--left {
      left: 20px;
      transform: translateY(-50%);
    }

    &--center {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &--right {
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>
