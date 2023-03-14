<template>
  <el-space
    :size="size"
    :spacer="spacer"
  >
    <div
      v-for="i in 2"
      :key="i"
    >
      <span> button {{ i }} </span>
    </div>
  </el-space>
</template>

<script lang="tsx" setup>
import { ref } from 'vue';

const size = ref(10);
const spacer = () => <el-divider direction="vertical" />;
</script>
