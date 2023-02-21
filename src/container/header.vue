<template>
  <header
    class="el-header"
    :style="style"
  >
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({
  name: 'ElHeader',
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
.el-header {
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: auto;
}
</style>
