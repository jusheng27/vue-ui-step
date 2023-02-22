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
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
}
</style>
