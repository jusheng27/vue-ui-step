<template>
  <footer
    class="el-footer"
    :style="footerStyle"
  >
    <slot />
  </footer>
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

const footerStyle = computed(() => ({ height: props.height }));
</script>

<style lang="scss">
.el-footer {
  overflow: auto;
}
</style>
