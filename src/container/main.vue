<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'ElMain',
});
</script>

<style lang="scss">
.el-main {
  flex: 1;
  box-sizing: border-box;
  overflow: auto;
}
</style>
