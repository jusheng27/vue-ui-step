<template>
  <aside
    class="el-aside"
    :style="style"
  >
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({
  name: 'ElAside',
});

const props = defineProps({
  width: {
    type: String,
    default: '300px',
  },
});

const style = computed(() => ({ width: props.width }));
</script>

<style lang="scss">
.el-aside {
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: auto;
}
</style>
