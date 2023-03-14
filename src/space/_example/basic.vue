<template>
  <el-space wrap>
    <div
      v-for="i in 3"
      :key="i"
      class="box-card"
      style="width: 200px"
    />
  </el-space>
</template>

<style lang="scss" scoped>
.box-card {
  height: 200px;
  background-color: #c6e2ff;
  border-radius: 4px;
}
</style>
