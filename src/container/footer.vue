<template>
  <div
    class="el-footer"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

defineOptions({
  name: 'ElFooter',
});

const props = defineProps({
  height: {
    type: String,
    default: '60px',
  },
});

const style = computed(() => ({ height: props.height }));
</script>

<style lang="scss">
.el-footer {
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: auto;
}
</style>
