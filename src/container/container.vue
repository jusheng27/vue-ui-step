<template>
  <div
    class="el-container"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

defineOptions({
  name: 'ElContainer',
});

const props = defineProps({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
});

const style = computed(() => ({
  'flex-direction': props.direction === 'vertical' ? 'column' : 'row',
}));
</script>

<style lang="scss">
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  box-sizing: border-box;
}
</style>
