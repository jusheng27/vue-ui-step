<template>
  <aside
    class="el-aside"
    :style="asideStyle"
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

const asideStyle = computed(() => ({ 'flex-basis': props.width }));
</script>

<style lang="scss">
.el-aside {
  flex-grow: 0;
  flex-shrink: 0;
  overflow: auto;
}
</style>
