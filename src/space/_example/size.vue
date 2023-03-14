<template>
  <div>
    <select
      id="size"
      v-model="size"
    >
      <option value="small">
        small
      </option>
      <option value="default">
        default
      </option>
      <option value="large">
        large
      </option>
    </select>
  </div>

  <div style="margin-top: 20px;">
    <el-space :size="size">
      <div
        v-for="i in 3"
        :key="i"
        class="box-card"
        style="width: 200px"
      />
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('default');
</script>

<style lang="scss" scoped>
.box-card {
  height: 200px;
  background-color: #c6e2ff;
  border-radius: 4px;
}
</style>
