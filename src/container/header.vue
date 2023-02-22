<template>
  <header
    class="el-header"
    :style="headerStyle"
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

const headerStyle = computed(() => ({ height: props.height }));
</script>

<style lang="scss">
.el-header {
  overflow: auto;
}
</style>
