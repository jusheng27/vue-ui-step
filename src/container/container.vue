<template>
  <section
    class="el-container"
    :style="containerStyle"
  >
    <slot />

    <slot name="header" />
  </section>
</template>

<script lang="ts" setup>
import { computed, PropType, useSlots } from 'vue';

defineOptions({
  name: 'ElContainer',
});

const props = defineProps({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
});

const slots = useSlots();

const realDirection = computed(() => {
  const children = slots.default();

  const isVertical = children?.filter((vnode) => {
    if (typeof vnode.type !== 'object') return false;

    return ['ElHeader', 'ElFooter'].includes(vnode.type?.name);
  })?.length;

  return isVertical ? 'vertical' : props.direction;
});

const containerStyle = computed(() => ({
  'flex-direction': realDirection.value === 'vertical' ? 'column' : 'row',
}));
</script>

<style lang="scss">
.el-container {
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
}
</style>
