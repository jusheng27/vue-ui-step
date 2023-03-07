<template>
  <div :class="['el-col', `el-col-${span}`]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'ElCol',
});

defineProps({
  span: {
    type: Number,
    default: 24,
  },
});
</script>

<style lang="scss">
@use 'sass:math';

.el-col {
  box-sizing: border-box;
}

.el-col-0 {
  display: none;
}

@for $i from 1 through 24 {
  .el-col-#{$i} {
    max-width: math.div($i, 24) * 100%;
    flex: 0 0 math.div($i, 24) * 100%;
  }
}
</style>
